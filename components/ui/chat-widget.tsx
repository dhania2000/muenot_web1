"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const CLICK_OPEN_DELAY = 10_000; // 10s after the first click on any page
const HOME_OPEN_DELAY = 15_000; // 15s after the site loads (home page)

const SUGGESTIONS = [
  "What services do you offer?",
  "How does localization work?",
  "Book a consultation",
];

export function ChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const interactedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  // Auto-open logic: re-armed on each page.
  useEffect(() => {
    interactedRef.current = false;
    let clickTimer: ReturnType<typeof setTimeout> | undefined;
    let loadTimer: ReturnType<typeof setTimeout> | undefined;

    const open = () => {
      if (interactedRef.current) return;
      interactedRef.current = true;
      setIsOpen(true);
    };

    const handleFirstClick = () => {
      document.removeEventListener("click", handleFirstClick);
      clickTimer = setTimeout(open, CLICK_OPEN_DELAY);
    };
    document.addEventListener("click", handleFirstClick);

    if (pathname === "/") {
      loadTimer = setTimeout(open, HOME_OPEN_DELAY);
    }

    return () => {
      document.removeEventListener("click", handleFirstClick);
      if (clickTimer) clearTimeout(clickTimer);
      if (loadTimer) clearTimeout(loadTimer);
    };
  }, [pathname]);

  // Keep the message list scrolled to the latest message.
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen, isBusy]);

  const toggle = () => {
    interactedRef.current = true; // any manual action stops auto-open
    setIsOpen((v) => !v);
  };

  const submit = (text: string) => {
    const value = text.trim();
    if (!value || isBusy) return;
    sendMessage({ text: value });
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 26 }}
            className="flex h-[30rem] w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            role="dialog"
            aria-label="Chat with Muenot assistant"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 bg-primary px-4 py-3 text-primary-foreground">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/15">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-sm font-semibold">Mia · Muenot Assistant</p>
                  <p className="text-xs text-primary-foreground/70">Typically replies in seconds</p>
                </div>
              </div>
              <button
                onClick={toggle}
                aria-label="Close chat"
                className="rounded-md p-1 transition-colors hover:bg-primary-foreground/15"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-surface px-4 py-4">
              {messages.length === 0 && (
                <div className="space-y-3">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3.5 py-2.5 text-sm text-card-foreground shadow-sm">
                    Hi! I&apos;m Mia. Ask me anything about Muenot&apos;s AI data, e-learning, or
                    localization services.
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => submit(s)}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={
                    message.role === "user" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-sm text-primary-foreground shadow-sm"
                        : "max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3.5 py-2.5 text-sm text-card-foreground shadow-sm"
                    }
                  >
                    {message.parts.map((part, i) =>
                      part.type === "text" ? <span key={i}>{part.text}</span> : null,
                    )}
                  </div>
                </div>
              ))}

              {status === "submitted" && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-card px-3.5 py-3 shadow-sm">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground" />
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-start">
                  <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-destructive/30 bg-card px-3.5 py-2.5 text-sm text-card-foreground shadow-sm">
                    Sorry, I couldn&apos;t connect right now. Please email{" "}
                    <a
                      href="mailto:info@muenot.co.in"
                      className="font-medium text-primary underline underline-offset-2"
                    >
                      info@muenot.co.in
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:+916377809826"
                      className="font-medium text-primary underline underline-offset-2"
                    >
                      +91 637 780 9826
                    </a>{" "}
                    and our team will help you.
                  </div>
                </div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-card px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    !e.nativeEvent.isComposing &&
                    e.keyCode !== 229
                  ) {
                    e.preventDefault();
                    submit(input);
                  }
                }}
                placeholder="Type your message..."
                aria-label="Type your message"
                className="min-w-0 flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              />
              <button
                type="submit"
                disabled={!input.trim() || isBusy}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher */}
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-colors hover:bg-primary-dark"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
