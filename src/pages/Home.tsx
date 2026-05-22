import Header from "../components/Header";
import WorkflowForm from "../components/WorkflowForm";
import SuggestionCards from "../components/SuggestionCards";
import LoadingState from "../components/LoadingState";
import { useWorkflowStore } from "../store/useWorkflowStore";

export default function Home() {
  const { suggestions, isLoading, error } = useWorkflowStore();

  return (
    <div className="min-h-screen bg-[#0c0c12]">
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <Header />

        <WorkflowForm />

        {error && (
          <div className="mt-5 max-w-2xl mx-auto bg-red-950/25 border border-red-500/20 rounded-xl px-5 py-4">
            <p className="text-red-400 text-sm leading-relaxed">{error}</p>
          </div>
        )}

        {isLoading && <LoadingState />}

        {!isLoading && suggestions && (
          <SuggestionCards suggestions={suggestions} />
        )}
      </div>
    </div>
  );
}
