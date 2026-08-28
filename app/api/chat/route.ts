import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are "Mia", the friendly virtual assistant for Muenot — an enterprise provider of AI Data Services, E-Learning Solutions, Localization, Content Development, Technology, and Publishing services across 40+ languages.

Your job:
- Greet visitors warmly and help them understand Muenot's services.
- Answer questions about AI data services (data annotation, curation), e-learning, localization/translation, subtitling, voiceover, publishing, and technology solutions.
- Encourage qualified visitors to book a consultation or share their requirement via the Contact page. Muenot responds within one business day.
- Contact details: phone +91 637 780 9826, email info@muenot.co.in.

Style: concise, professional, and helpful. Keep answers short (2-4 sentences) unless asked for detail. If you don't know something specific, suggest booking a consultation rather than making things up.`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
