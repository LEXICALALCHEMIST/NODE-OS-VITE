// src/views/docz/doczView.js — Documents view with placeholder file grid

export default function DoczView() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('FATAL: #root not found');
    return document.createElement('div');
  }

  root.innerHTML = '';

  const container = document.createElement('div');
  container.style.cssText = 'position:relative; width:100%; height:100%;';

  // NAX BACKGROUND
  const background = document.createElement('div');
  background.className = 'naxBackground';
  container.appendChild(background);

  // Main card
  const card = document.createElement('div');
  card.className = 'os_card';
  card.style.cssText = 'max-width: 900px; margin: 0px auto; padding: 10px;';

  // Title
  const title = document.createElement('h1');
  title.textContent = 'Documents';
  title.style.cssText = `
    color: aqua;
    font-family: orbitron, sans-serif;
    font-size: 12px;
    text-shadow: 0 0 40px aqua;
    letter-spacing: 8px;
    margin: 0 0 40px 0;
    text-align: center;
  `;
  card.appendChild(title);

  // Placeholder file grid
  const fileNames = ['Image', 'Download', 'DbDragon', 'System', 'Flash', 'Databases', 'Songs'];

  const grid = document.createElement('div');
  grid.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 20px;
    padding: 10px 0;
  `;

  const documentIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="aqua" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
  `;

  fileNames.forEach(name => {
    const item = document.createElement('div');
    item.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      background: rgba(0, 255, 255, 0.08);
      border: 1px solid rgba(0, 255, 255, 0.3);
      border-radius: 12px;
      text-align: center;
      transition: all 0.3s ease;
      cursor: pointer;
    `;

    // Hover glow (cosmetic preview of future selection)
    item.addEventListener('mouseover', () => {
      item.style.boxShadow = '0 0 30px aqua';
      item.style.transform = 'translateY(-8px)';
    });
    item.addEventListener('mouseout', () => {
      item.style.boxShadow = '';
      item.style.transform = '';
    });

    const icon = document.createElement('div');
    icon.innerHTML = documentIconSVG;
    icon.style.cssText = 'margin-bottom: 15px; filter: drop-shadow(0 0 15px aqua);';

    const label = document.createElement('span');
    label.textContent = name;
    label.style.cssText = `
      color: aqua;
      font-family: monospace;
      font-size: 1.3rem;
      text-shadow: 0 0 15px aqua;
      letter-spacing: 2px;
    `;

    item.appendChild(icon);
    item.appendChild(label);
    grid.appendChild(item);
  });

  card.appendChild(grid);
  container.appendChild(card);
  root.appendChild(container);

  return container;
}