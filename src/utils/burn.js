// src/utils/burn.js — Clear root for next view

export default function burn() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('FATAL: #root not found — cannot burn');
    return;
  }

  root.innerHTML = '';

  console.log('%cROOT BURNED — lattice sterilized for next injection', 'color: #ffd000ff; font-weight: bold; background: #000; padding: 6px 12px; border-radius: 4px;');
}