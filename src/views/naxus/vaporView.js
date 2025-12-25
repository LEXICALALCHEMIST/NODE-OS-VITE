// src/views/vapor/vapor.js — VAPOR view with app catalog menu

import burn from '../../utils/burn.js';  // Burn root first
import { APP_CATALOG } from '../../reactor/appIndex.js';  // Catalog
import { spawnApp } from '../../reactor/reactor.js';     // Spawner

export default function VaporView() {
  burn();  // Clear root for clean injection

  const root = document.getElementById('root');
  if (!root) return document.createElement('div');

  const view = document.createElement('div');
  view.className = 'os_view';
  view.style.cssText = `
    padding: 40px;
    text-align: center;
  `;

  const title = document.createElement('h1');
  title.textContent = 'VAPOR';
  title.style.cssText = 'font-size: 3rem; text-shadow: 0 0 30px aqua; border-bottom: 2px solid aqua;';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Logic Streaming Platform';
  subtitle.style.cssText = 'font-size: 12px; margin: 10px 0;';

  // The app catalog card
  const card = document.createElement('div');
  card.className = 'os_card';
  card.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    padding: 30px 20px;
    margin-top: 40px;
  `;

  // Map catalog to app tiles
  APP_CATALOG.forEach(app => {
    const tile = document.createElement('div');
    tile.className = 'os_btn';  // Reuse your button style
    tile.style.cssText = `
      width: 90px;
      height: 60px;
      display: grid;
      place-items: center;
      gap: 8px;
      cursor: pointer;
    `;

    const icon = document.createElement('div');
    icon.textContent = app.icon;
    icon.style.fontSize = '20px';

    const name = document.createElement('div');
    name.textContent = app.name;
    name.style.fontSize = '12px';

    tile.appendChild(icon);
    tile.appendChild(name);

    // Click to spawn app
    tile.addEventListener('click', () => {
      console.log(`%cVAPOR → Spawning ${app.name} (${app.id})`, 'color: aqua; font-weight: bold;');
      spawnApp(app.id);
    });

    card.appendChild(tile);
  });

  view.appendChild(title);
  view.appendChild(subtitle);
  view.appendChild(card);

  return view;
}