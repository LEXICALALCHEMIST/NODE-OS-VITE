// src/views/docz/doczView.js — Clean Documents view (returns node)

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
  card.style.cssText = 'max-width: 900px; margin: 80px auto; padding: 60px;';

  // Title
  const title = document.createElement('h1');
  title.textContent = 'Documents';
  title.style.cssText = `
    color: aqua;
    font-family: monospace;
    font-size: 3.5rem;
    text-shadow: 0 0 40px aqua;
    letter-spacing: 8px;
    margin: 0;
  `;
  card.appendChild(title);

  container.appendChild(card);
  root.appendChild(container);

  return container;  // Return the container node — consistent with other views
}