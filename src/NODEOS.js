// src/NODEOS.js — Main OS entry with Warp/Desktop mode support

import CoreMenu from './os-components/coreMenu.js';
import { spawnApp } from './reactor/reactor.js';
import { WARP_MANIFEST } from './warp/manifest.js';  // Null or valid object

export default function NODEOS() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('FATAL: #root not found');
    return;
  }

  root.innerHTML = '';

  // WARP MODE — if valid manifest exists
  if (WARP_MANIFEST && WARP_MANIFEST.id && WARP_MANIFEST.hub) {
    console.log('%cWARP MODE ACTIVATED — Direct spawn', 'color: #00ffff; font-weight: bold;');
    console.log('Warp manifest:', WARP_MANIFEST);

    // Use existing reactor spawn — keeps XenoFrame, logs, burn consistent
    spawnApp(WARP_MANIFEST.id);

    return;  // Skip desktop UI entirely
  }

  // DESKTOP MODE — default full lattice
  const mainView = document.createElement('div');
  mainView.className = 'os_card';

  const title = document.createElement('h2');
  title.textContent = 'NODE | OS';
  title.className = 'os_orbitron';
  title.style.cssText = `
    color: aqua;
    font-size: 2.5rem;
    text-shadow: 0 0 40px aqua;
    letter-spacing: 8px;
    margin: 0 0 10px;
  `;

  const modeInfo = document.createElement('p');
  modeInfo.textContent = 'Desktop Mode Active';
  modeInfo.style.cssText = `
    color: #888;
    font-family: orbitron, sans-serif;
    font-size: 10px;
    color: aquamarine;
    margin: 20px;
  `;

  mainView.appendChild(title);
  mainView.appendChild(modeInfo);

  const coreMenu = CoreMenu();
  mainView.appendChild(coreMenu);

  root.appendChild(mainView);

  console.log('NODE | OS — Desktop mode active, CoreMenu injected');
}