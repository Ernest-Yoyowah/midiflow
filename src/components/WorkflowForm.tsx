import type { FormEvent } from "react";
import { useWorkflowStore } from "../store/useWorkflowStore";
import { generateSuggestions } from "../services/openai";
import type { WorkflowInput } from "../types";

const fields: {
  key: keyof WorkflowInput;
  label: string;
  placeholder: string;
}[] = [
  {
    key: "keyboard",
    label: "Keyboard",
    placeholder: "e.g. Yamaha MODX6, Nord Stage 4, Korg Kronos",
  },
  {
    key: "daw",
    label: "DAW / Performance Software",
    placeholder: "e.g. MainStage, Ableton Live, Logic Pro",
  },
  {
    key: "controller",
    label: "MIDI Controller",
    placeholder: "e.g. Arturia KeyLab 61, Akai MPK261, NI Komplete Kontrol",
  },
  {
    key: "useCase",
    label: "Use Case / Genre",
    placeholder: "e.g. Church worship with smooth song transitions",
  },
];

export default function WorkflowForm() {
  const { input, isLoading, setInput, setSuggestions, setLoading, setError } =
    useWorkflowStore();

  const hasInput = Object.values(input).some((v) => v.trim().length > 0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasInput || isLoading) return;

    setLoading(true);
    setError(null);

    try {
      const suggestions = await generateSuggestions(input);
      setSuggestions(suggestions);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to generate suggestions. Please check your API key and try again.",
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="bg-[#141419] border border-[#252530] rounded-2xl p-6 space-y-4 shadow-xl shadow-black/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map(({ key, label, placeholder }) => (
            <div key={key} className={key === "useCase" ? "sm:col-span-2" : ""}>
              <label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-[0.14em] mb-2 select-none">
                {label}
              </label>
              <input
                type="text"
                value={input[key]}
                onChange={(e) => setInput(key, e.target.value)}
                placeholder={placeholder}
                disabled={isLoading}
                className="w-full bg-[#0c0c12] border border-[#252530] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/15 transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
              />
            </div>
          ))}
        </div>

        <div className="pt-1">
          <button
            type="submit"
            disabled={!hasInput || isLoading}
            className="w-full bg-violet-600 hover:bg-violet-500 active:bg-violet-700 disabled:bg-[#1e1e28] disabled:text-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl text-sm tracking-wide transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2.5">
                <svg
                  className="animate-spin h-4 w-4 opacity-80"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Analyzing your rig…
              </span>
            ) : (
              "Generate Suggestions"
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
