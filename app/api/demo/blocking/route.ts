import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function POST() {
  const response = await generateText({
    model: google("gemini-3-flash-preview"),
    prompt: "Write a vegetarian lasagne recipe for 4 people."
  });

  return Response.json({ response });
}
