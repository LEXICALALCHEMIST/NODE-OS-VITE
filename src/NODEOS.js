// src/NODEOS.js — Main OS view with CoreMenu injected

import CoreMenu from './os-components/coreMenu.js';  // Import the core menu

export default function NODEOS() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('FATAL: #root not found');
    return;
  }

  root.innerHTML = '';

  const mainView = document.createElement('div');
  mainView.className = 'os_card'

  // Title — styled to match NODE | OS look
  const title = document.createElement('h2');
  title.textContent = 'NODE | OS';
  title.className = 'os_orbitron';
  title.style.cssText = `
    color: aqua;
    font-size: 2.5rem;
    text-shadow: 0 0 40px aqua;
    letter-spacing: 8px;
    margin: 0 0 60px;
  `;
  mainView.appendChild(title);

  // Inject CoreMenu — the navigation hub
  const coreMenu = CoreMenu();
  mainView.appendChild(coreMenu);

  // Inject into root
  root.appendChild(mainView);

  console.log('NODE | OS — CoreMenu injected');
}