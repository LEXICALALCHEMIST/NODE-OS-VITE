// src/os-components/coreSelect/coreSelect.js — Core navigation hub

import burn from '../../utils/burn.js';  // Clear root
import VaporView from '../../views/naxus/vaporView.js';  // Add other views later
import CardLabel from '../cardLabel/cardLabel.js';  // Import CardLabel


export default function CoreSelect() {
  const container = document.createElement('div');
  container.className = 'os_card';  // Use reusable class

  const title = document.createElement('div');
  title.textContent = 'CORE SELECT';
  title.style.cssText = `
    color: aqua;
    font-family: monospace;
    font-size: 1.6rem;
    margin-bottom: 30px;
    text-shadow: 0 0 20px white;
    letter-spacing: 4px;
  `;
  container.appendChild(title);

  const buttonRow = document.createElement('div');
  buttonRow.style.cssText = `
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const buttons = ['NAXUS', 'SETTING', 'DOCUMENTS', 'EXTENSIONS'];

  buttons.forEach(label => {
    const btn = document.createElement('div');
    btn.textContent = label;
    btn.className = 'os_btn';

    btn.addEventListener('click', () => {
      console.log(`%cCORE SELECT → Launching ${label}`, 'color: aqua; font-weight: bold;');

      burn();  // Clear everything

      const root = document.getElementById('root');
      if (!root) return;

      let view;
      if (label === 'NAXUS') {
        view = VaporView();
      } else {
        // Placeholder for other views
        view = document.createElement('div');
        view.className = 'os_view';
        view.innerHTML = `<h1>${label} VIEW</h1><p>Coming soon...</p>`;
      }

      root.appendChild(view);
    });

    buttonRow.appendChild(btn);
  });

  container.appendChild(buttonRow);

  return container;
}