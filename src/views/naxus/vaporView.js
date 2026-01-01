// src/views/vapor/vapor.js — NAXUS view with BACK button

import { APP_CATALOG } from '../../reactor/appIndex.js';
import { spawnApp } from '../../reactor/reactor.js';
import CardLabel from '../../os-components/cardLabel/cardLabel.js';
import CoreMenu from '../../os-components/coreMenu.js';  // Import CoreMenu for back

export default function VaporView() {
  const root = document.getElementById('root');
  if (!root) return document.createElement('div');

  root.innerHTML = '';

  const mainCard = document.createElement('div');
  mainCard.className = 'os_card';
  mainCard.style.cssText = `
    max-width: 900px;
    margin: 40px auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `;

  // CardLabel title
  const titleCard = CardLabel('NAXUS - ALLMIND');
  mainCard.appendChild(titleCard);

  // App catalog grid
  const appGrid = document.createElement('div');
  appGrid.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
    margin-top: 40px;
    width: 100%;
  `;

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
      spawnApp(app.id);
    });

    appGrid.appendChild(tile);
  });

  mainCard.appendChild(appGrid);

  // BACK BUTTON — returns to CoreMenu
  const backBtn = document.createElement('button');
  backBtn.textContent = '← BACK';
  backBtn.className = 'os_btn';
  backBtn.style.cssText = `
    position: absolute;
    top: 40px;
    left: 20px;
    z-index: 9999;
    font-size: 12px;
    padding: 10px 20px;
    font-family: orbitron, monospace, sans-serif;
  `;
  backBtn.addEventListener('click', () => {
    console.log('%cNAXUS → BACK to CoreMenu', 'color: aqua; font-weight: bold;');
    root.innerHTML = '';  // Clear current view
    const coreMenu = CoreMenu();
    root.appendChild(coreMenu);
  });
  root.appendChild(backBtn);

  root.appendChild(mainCard);

  return mainCard;
}