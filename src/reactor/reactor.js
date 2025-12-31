// src/integration/reactor.js — PURE DOM SPAWN ONLY (no React confusion)
import { APP_CATALOG } from './appIndex.js';
import { Matrix } from '../core/ZMXENO/gate/matrix.js';
import burn from '../utils/burn.js';           // Burn utility
import VaporView from '../views/naxus/vaporView.js';  // Main hub view

console.log('ADAPT');
console.log('%cXENO: MATRIX(GPI) : Gate:Open Path:NonPar Imprint:sleep', 'color: #ff0044; background: white; font-size: 10PX; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-shadow: 0 0 10px #ff0044;');
// Create shared Xeno instance ONCE (available to all Skins)
const xenoMatrix = new Matrix();
window.xenoMatrix = xenoMatrix;
console.log('XENO MATRIX INSTANCE EXPOSED ON WINDOW');

export const spawnApp = async (appId) => {
  const app = APP_CATALOG.find(a => a.id === appId);
  if (!app) return console.error("App not found:", appId);

  const url = app.hub; // e.g. http://localhost:3000/apps/calculator/calculator_os.js
  const componentName = app.componentName || 'CalculatorSkin';

  // Clean old instance
  document.querySelector('#calculator-os')?.remove();

  const script = document.createElement('script');
  script.type = 'module';  // ← THIS IS THE FIX
  script.src = url + "?t=" + Date.now();

  return new Promise((resolve, reject) => {
    script.onload = () => {
      const Skin = window[componentName];
      if (typeof Skin === 'function') {
        Skin(); // Just call it — pure DOM
        // AQUA — Reactor spawn success
        console.log('%cREACTOR Spawns: ' + app.name + ' —> @root', 'color: aqua; font-weight: bold; font-family: monospace; font-size: 14px; background: #000; padding: 6px 12px; border-radius: 6px;');

        // PURPLE — ALL-MIND reactor + matrix sync confirmation
        console.log('%cALL-MIND → ' + app.name + ' N-A-X Sync Sucess', 'color: #b388ff; font-weight: bold; font-family: monospace; font-size: 10px; background: #000; padding: 2px 8px; border-radius: 6px; text-shadow: 0 0 15px #b388ff;');
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

// In reactor.js — message bridge (future privileged ops)
  window.addEventListener('message', (e) => {
    // TEMP: Allow all origins for local dev
    // Later: const allowedOrigins = ['http://localhost:3000', 'https://yourdomain.com'];
    // if (!allowedOrigins.includes(e.origin)) return;

    const msg = e.data;
    if (msg.op === 'saveFile' && msg.path && msg.data) {
      console.log('%cREACTOR BRIDGE → saveFile request', 'color: yellow;', msg);
      // Future: privileged fs access here
      // For now: just acknowledge
      e.source.postMessage({ ok: true, id: msg.id, note: 'bridge ready (fs not implemented)' });
    }
  });

// Kill command to reset app state
// Usage: window.killApp() from console on dom from any app as ive wired root conetext to a shadow dom
    function killApp() {
      console.log('%cKILL COMMAND — App terminated', 'color: #ff0044; font-weight: bold; background: #000; padding: 6px 12px; border-radius: 6px;');

      // Remove all child nodes from body except #root
      const root = document.getElementById('root');
      if (root) {
        // Keep #root, clear its children
        root.innerHTML = '';
      }

      // Optional: remove any stray app containers
      document.querySelectorAll('div[id^="calc-"], div[id^="notes-"]').forEach(el => el.remove());

      // Re-inject VaporView
      const vapor = VaporView();
      if (root) {
        root.appendChild(vapor);
      } else {
        document.body.appendChild(vapor);
      }

      console.log('%cVAPOR VIEW — Re-injected as safe hub', 'color: aqua; font-weight: bold;');
    }

    window.killApp = killApp;