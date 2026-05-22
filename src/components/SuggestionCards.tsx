import type { WorkflowSuggestions } from "../types";

const SECTIONS: {
  key: keyof WorkflowSuggestions;
  title: string;
  symbol: string;
  accent: string;
  dimAccent: string;
}[] = [
  {
    key: "midiRouting",
    title: "MIDI Routing",
    symbol: "⟶",
    accent: "text-violet-400",
    dimAccent: "text-violet-500/50",
  },
  {
    key: "controllerMapping",
    title: "Controller Mapping",
    symbol: "◈",
    accent: "text-blue-400",
    dimAccent: "text-blue-500/50",
  },
  {
    key: "patchOrganization",
    title: "Patch Organization",
    symbol: "≡",
    accent: "text-emerald-400",
    dimAccent: "text-emerald-500/50",
  },
  {
    key: "layerSuggestions",
    title: "Layer Suggestions",
    symbol: "⊞",
    accent: "text-amber-400",
    dimAccent: "text-amber-500/50",
  },
  {
    key: "transitionRecommendations",
    title: "Transition Ideas",
    symbol: "⟿",
    accent: "text-pink-400",
    dimAccent: "text-pink-500/50",
  },
  {
    key: "performanceTips",
    title: "Performance Tips",
    symbol: "◉",
    accent: "text-cyan-400",
    dimAccent: "text-cyan-500/50",
  },
];

interface Props {
  suggestions: WorkflowSuggestions;
}

export default function SuggestionCards({ suggestions }: Props) {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <p className="text-center text-[10px] font-medium text-gray-600 uppercase tracking-[0.16em] mb-5 select-none">
        Workflow Recommendations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTIONS.map(({ key, title, symbol, accent, dimAccent }) => {
          const items = suggestions[key];
          if (!items || items.length === 0) return null;

          return (
            <div
              key={key}
              className="bg-[#141419] border border-[#252530] rounded-xl p-5 hover:border-[#363648] transition-all duration-200 group"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className={`text-base font-mono leading-none ${accent} opacity-90`}
                  aria-hidden="true"
                >
                  {symbol}
                </span>
                <h3 className="text-[11px] font-semibold text-gray-200 uppercase tracking-[0.12em] select-none">
                  {title}
                </h3>
              </div>

              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="flex gap-2.5 items-start">
                    <span
                      className={`${dimAccent} text-[10px] mt-[3px] flex-shrink-0 font-mono`}
                      aria-hidden="true"
                    >
                      ▸
                    </span>
                    <span className="text-[12.5px] text-gray-400 leading-[1.55] group-hover:text-gray-300 transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
