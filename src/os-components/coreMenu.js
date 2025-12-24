// src/os-components/coreMenu.js — Core navigation menu with CoreSelect

import CoreSelect from './coreSelect/coreSelect.js';  // Relative path

export default function CoreMenu() {
  const menuDiv = document.createElement('div');
  menuDiv.style.cssText = `
    color: aqua;
    font-family: monospace;
    font-size: 1.8rem;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    border: 1px solid aqua;
    border-radius: 8px;
    background: black;
  `;

  // Inject CoreSelect component
  const coreSelect = CoreSelect();
  menuDiv.appendChild(coreSelect);

  return menuDiv;
}