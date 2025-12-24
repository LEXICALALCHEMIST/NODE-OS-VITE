// src/reactor/appIndex.js — Reactor APP_CATALOG

export const APP_CATALOG = [
  {
    id: "calc-001",
    name: "Calculator",
    icon: "▣",
    hub: "http://localhost:3000/apps/calculator/calculator_os.js",
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
    id: "agent-001",
    name: "Agent Workspace",
    icon: "◉",
    hub: "local",  // or future remote
    componentName: "AgentWorkspace"
  }
  // Future apps here
];