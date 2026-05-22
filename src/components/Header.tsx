export default function Header() {
  return (
    <header className="text-center pt-10 pb-8">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-xl bg-violet-600/15 border border-violet-500/25 flex items-center justify-center flex-shrink-0">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect
              x="1"
              y="6"
              width="2.5"
              height="8"
              rx="1.25"
              fill="#8b5cf6"
              opacity="0.7"
            />
            <rect
              x="4.5"
              y="3.5"
              width="2.5"
              height="10.5"
              rx="1.25"
              fill="#8b5cf6"
              opacity="0.85"
            />
            <rect
              x="8"
              y="1"
              width="2.5"
              height="14"
              rx="1.25"
              fill="#a78bfa"
            />
            <rect
              x="11.5"
              y="4"
              width="2.5"
              height="10"
              rx="1.25"
              fill="#8b5cf6"
              opacity="0.85"
            />
            <rect
              x="15"
              y="7"
              width="2.5"
              height="7"
              rx="1.25"
              fill="#8b5cf6"
              opacity="0.7"
            />
          </svg>
        </div>

        <h1 className="text-[2rem] font-bold tracking-tight text-white leading-none">
          MIDI<span className="text-violet-400">Flow</span>
        </h1>
      </div>

      <p className="text-gray-500 text-xs font-medium tracking-[0.18em] uppercase select-none">
        AI Workflow Assistant for Keyboardists
      </p>
    </header>
  );
}
