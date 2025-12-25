// src/integration/reactor.js — PURE DOM SPAWN ONLY (no React confusion)
import { APP_CATALOG } from './appIndex.js';
import { Matrix } from '../core/ZMXENO/gate/matrix.js';

console.log('ADAPT');
 console.log('%cXENO: MATRIX(GPI) : Gate:Open Path:NonPar Imprint:sleep', 'color: #ff0044; background: white; font-size: 10PX; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-shadow: 0 0 10px #ff0044;');
// Create shared Xeno instance ONCE (available to all Skins)
const xenoMatrix = new Matrix();
window.xenoMatrix = xenoMatrix;
console.log('XENO MATRIX INSTANCE EXPOSED ON WINDOW — READY FOR SKINS');

export const spawnApp = async (appId) => {
  const app = APP_CATALOG.find(a => a.id === appId);
  if (!app) return console.error("App not found:", appId);

  const url = app.hub; // e.g. http://localhost:3000/apps/calculator/calculator_os.js
  const componentName = app.componentName || 'CalculatorSkin';

  // Clean old instance
  document.querySelector('#calculator-os')?.remove();

  const script = document.createElement('script');
  script.src = url + "?t=" + Date.now(); // bust cache

  return new Promise((resolve, reject) => {
    script.onload = () => {
      const Skin = window[componentName];
      if (typeof Skin === 'function') {
        Skin(); // Just call it — pure DOM
        console.log(`${app.name} IS ALIVE — PURE DOM FROM HUB`);
        resolve({
          destroy: () => document.querySelector('#calculator-os')?.remove()
        });
      } else {
        reject("Skin function not found on window");
      }
    };

    script.onerror = () => reject("Failed to load Skin script");

    document.head.appendChild(script);
  });
};