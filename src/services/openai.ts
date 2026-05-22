import OpenAI from "openai";
import { SYSTEM_PROMPT, buildUserPrompt } from "../prompts/midiflow";
import type { WorkflowInput, WorkflowSuggestions } from "../types";
import { MOCK_SUGGESTIONS } from "./mockData";

const IS_MOCK = import.meta.env.VITE_MOCK_MODE === "true";

export async function generateSuggestions(
  input: WorkflowInput,
): Promise<WorkflowSuggestions> {
  if (IS_MOCK) {
    await new Promise((resolve) => setTimeout(resolve, 1800));
    return MOCK_SUGGESTIONS;
  }

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    response_format: { type: "json_object" },
    temperature: 0.7,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: buildUserPrompt(input) },
    ],
  });

  const content = response.choices[0]?.message?.content;
  if (!content) {
    throw new Error("No response received from the AI. Please try again.");
  }

  return JSON.parse(content) as WorkflowSuggestions;
}
