// src/reactor/appIndex.js — Reactor APP_CATALOG

export const APP_CATALOG = [
  {
    id: "calc-001",
    name: "Calculator",
    icon: "▣",
    hub: "http://localhost:3000/apps/calculator/calculator_os_main.js",
    componentName: "CalculatorSkin"  // Exact global name from remote script
  },
  {
    id: "notes-001",
    name: "Notes",
    icon: "▤",
    hub: "http://localhost:3000/apps/notes/notes_os.js",  // Placeholder URL
    componentName: "NotesSkin"  // Exact name expected from remote script
  },
  {
    id: "weather-001",
    name: "Weather",
    icon: "☁",
    hub: "http://localhost:3000/apps/weather/weather_os.js",  // Relative path — served by ALL-MIND
    componentName: "WeatherSkin"         // Exact global name in remote skin
  },
  {
    id: "agent-001",
    name: "Agent Workspace",
    icon: "◉",
    hub: "local",  // or future remote
    componentName: "AgentWorkspace"
  }
  // Future apps here
];