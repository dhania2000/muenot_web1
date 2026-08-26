"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointmentUrl: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  appointmentUrl,
}: AppointmentModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-foreground/50 backdrop-blur-sm"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 overflow-hidden"
            style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Schedule an appointment"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 16 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "relative w-full max-w-5xl overflow-hidden flex flex-col",
                "bg-card border border-border rounded-lg shadow-2xl",
                "h-[95vh] sm:h-[90vh]"
              )}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
                <div className="flex-1 min-w-0 pr-2">
                  <h2 className="text-base sm:text-lg font-semibold text-foreground truncate">
                    Schedule a Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 hidden sm:block">
                    Pick a time that works for you — a solutions lead will join
                    the call.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-md transition-colors shrink-0 text-muted-foreground hover:text-foreground hover:bg-secondary"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Content - Google Calendar iframe */}
              <div className="flex-1 overflow-hidden bg-secondary/40 p-2 sm:p-4">
                <div className="relative overflow-hidden rounded-md border border-border bg-card w-full h-full">
                  <iframe
                    src={appointmentUrl}
                    width="100%"
                    height="100%"
                    title="Google Calendar Appointment Scheduling"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
