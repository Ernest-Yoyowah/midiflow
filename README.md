# MIDIFlow

> AI-powered workflow assistant for keyboardists and live musicians.

MIDIFlow helps musicians cut through the complexity of MIDI routing, patch organization, and live performance setup — especially for church worship and rehearsal environments. Describe your rig and get back structured, actionable recommendations powered by GPT-4o.

---

## Stack

| Layer         | Technology            |
| ------------- | --------------------- |
| Desktop shell | Tauri 2 (macOS)       |
| Frontend      | React 18 + TypeScript |
| Styling       | Tailwind CSS 3        |
| State         | Zustand 5             |
| AI            | OpenAI API (GPT-4o)   |
| Build         | Vite 5                |

---

## Features

- Describe your keyboard, DAW, controller, and use case
- Receive structured AI suggestions across 6 workflow areas:
  - MIDI Routing
  - Controller Mapping
  - Patch Organization
  - Layer Suggestions
  - Transition Recommendations
  - Performance Tips
- Dark, minimal UI optimized for musician workflows
- Mock mode for local development without an API key

---

## Project Structure

```
src/
  components/     # Header, WorkflowForm, SuggestionCards, LoadingState
  pages/          # Home (main screen)
  store/          # Zustand workflow store
  services/       # OpenAI service + mock data
  prompts/        # System prompt and user prompt builder
  types/          # TypeScript interfaces
src-tauri/        # Tauri 2 backend (Rust)
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://www.rust-lang.org/tools/install) (for Tauri desktop build)
- An OpenAI API key (or use mock mode to develop without one)

### Install

```bash
npm install
```

### Configure

```bash
cp .env.example .env
```

Edit `.env`:

```env
VITE_OPENAI_API_KEY=sk-your-key-here

# Set to "true" to bypass OpenAI and use hardcoded mock responses
VITE_MOCK_MODE=false
```

### Run (browser / Vite only)

```bash
npm run dev
# → http://localhost:1420
```

### Run (Tauri desktop window)

```bash
npm run tauri dev
```

### Build

```bash
npm run tauri build
```

---

## Mock Mode

No API key yet? Set `VITE_MOCK_MODE=true` in `.env`. The app will simulate a real API call (with a loading delay) and return a realistic pre-built response so the full UI flow is testable immediately.

---

## License

MIT
