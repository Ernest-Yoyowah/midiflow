import { create } from "zustand";
import type { WorkflowInput, WorkflowSuggestions } from "../types";

interface WorkflowStore {
  input: WorkflowInput;
  suggestions: WorkflowSuggestions | null;
  isLoading: boolean;
  error: string | null;
  setInput: (field: keyof WorkflowInput, value: string) => void;
  setSuggestions: (suggestions: WorkflowSuggestions) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const defaultInput: WorkflowInput = {
  keyboard: "",
  daw: "",
  controller: "",
  useCase: "",
};

export const useWorkflowStore = create<WorkflowStore>((set) => ({
  input: defaultInput,
  suggestions: null,
  isLoading: false,
  error: null,

  setInput: (field, value) =>
    set((state) => ({ input: { ...state.input, [field]: value } })),

  setSuggestions: (suggestions) =>
    set({ suggestions, error: null, isLoading: false }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error, isLoading: false }),
}));
