// src/os-components/coreMenu.js — Core navigation menu with CoreSelect

import CoreSelect from './coreSelect/coreSelect.js';  // Relative path

export default function CoreMenu() {
  const menuDiv = document.createElement('div');
  menuDiv.className = 'os_card';  // Use reusable class

  // Inject CoreSelect component
  const coreSelect = CoreSelect();
  menuDiv.appendChild(coreSelect);

  return menuDiv;
}