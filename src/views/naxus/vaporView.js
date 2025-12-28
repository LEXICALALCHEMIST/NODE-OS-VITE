// src/views/vapor/vapor.js — NAXUS view with CardLabel title + app catalog

import burn from '../../utils/burn.js';  // Burn root first
import { APP_CATALOG } from '../../reactor/appIndex.js';  // Catalog
import { spawnApp } from '../../reactor/reactor.js';     // Spawner
import CardLabel from '../../os-components/cardLabel/cardLabel.js';  // Import CardLabel

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

  // Use CardLabel instead of manual h2
  const titleCard = CardLabel('NAXUS - ALLMIND');  // Pass title text
  view.appendChild(titleCard);

  const subtitle = document.createElement('p');
  subtitle.textContent = '';
  subtitle.style.cssText = 'font-size: 12px; margin: 10px 0;';
  view.appendChild(subtitle);

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
    tile.className = 'os_btn';
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

    tile.addEventListener('click', () => {
      console.log('%cREACTOR: SPAWN APP -> ' + app.name, 
        'color: aqua; background: #111; font-size: 12px; font-weight: bold; padding: 4px 8px; border-left: 4px solid grey;'
      );
      spawnApp(app.id);
    });

    card.appendChild(tile);
  });

  view.appendChild(card);

  return view;
}