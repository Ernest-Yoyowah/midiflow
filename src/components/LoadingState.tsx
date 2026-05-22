const CARD_COUNT = 6;
const ITEM_WIDTHS = ["75%", "90%", "60%", "82%", "70%"];

export default function LoadingState() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <p className="text-center text-[10px] font-medium text-gray-700 uppercase tracking-[0.16em] mb-5 select-none animate-pulse">
        Generating suggestions…
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: CARD_COUNT }).map((_, i) => (
          <div
            key={i}
            className="bg-[#141419] border border-[#252530] rounded-xl p-5"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-4 h-4 rounded bg-[#252530] animate-pulse" />
              <div className="h-2.5 w-24 rounded-full bg-[#252530] animate-pulse" />
            </div>

            <div className="space-y-3">
              {ITEM_WIDTHS.slice(0, 3 + (i % 2)).map((width, j) => (
                <div key={j} className="flex gap-2.5 items-start">
                  <div className="w-2 h-2 mt-1 rounded-sm bg-[#252530] flex-shrink-0 animate-pulse" />
                  <div
                    className="h-2.5 rounded-full bg-[#252530] animate-pulse"
                    style={{ width }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
