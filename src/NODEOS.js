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
  mainView.className = 'os_view';

  // Title
  const title = document.createElement('h3');
  title.textContent = 'NODE | OS';
  mainView.appendChild(title);

  // Status lines
  const status1 = document.createElement('h4');
  status1.textContent = 'ALLMIND : port3000: ONLINE';
  mainView.appendChild(status1);

  const status2 = document.createElement('p');
  status2.className = 'small';
  status2.textContent = 'INSTANT LOGIC STREAM';
  mainView.appendChild(status2);

  // Inject CoreMenu — the navigation hub
  const coreMenu = CoreMenu();
  mainView.appendChild(coreMenu);

  // Inject into root
  root.appendChild(mainView);

  console.log('NODE | OS — CoreMenu injected');
}