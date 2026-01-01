// src/boot.js — Boot sequence → handoff to NODEOS main view

import NODEOS from './NODEOS.js';  // Main view

function Boot() {
  const root = document.getElementById('root');
  if (!root) {
    console.error('FATAL: #root not found');
    return;
  }
  root.innerHTML = ''

  const logContainer = document.createElement('div');
  logContainer.id = 'boot-log';
    logContainer.style.cssText = `
    width: 300px;
    height: 500px;              /* Fixed height for small box */
    padding: 20px;
    background: #000;
    color: aqua;
    font-family: orbitron, monospace, sans-serif;
    font-size: 10px;
    line-height: 1.6;
    text-align: left;
    white-space: pre;
    overflow-y: auto;           /* Scroll if logs overflow */
    overflow-x: hidden;
    border: 1px solid #00ffff44;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    box-sizing: border-box;
    `;

  root.appendChild(logContainer);

  //node log blue
  console.log('%cNODE_OS -> COLDBOOT : .9 SECONDS', 'color: aqua; font-weight: bold;');
  console.log('%cCURRENT MEMORY: 1.77KBS | .4 RAM', 'color: aqua; font-size: 12px;');
  //all mind log purple
  console.log('%cALL-MIND : ONLINE', 'color: #b388ff; font-family: monospace; font-size: 10px;');
  //xeno log red
  console.log('%cXENO : ADAPTIVE', 'color: #ff0044; background: white; font-size: 10PX; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-shadow: 0 0 10px #ff0044;');

  console.log('%cNODE|OS.REACTOR.CORE : OPEN\n%cREACTOR: [ALLMIND] POLYGON[cdn]\n%cAWATING ALL MIND CONNECT', 
  'color: aqua; background: #111; font-size: 12px; font-weight: bold; padding: 4px 8px; border-left: 4px solid grey;',
  'color: aqua; background: #111; font-size: 10px; padding: 3px 8px 3px 24px;',
  'color: aqua; background: #111; font-size: 10px; padding: 3px 8px 6px 24px; font-style: italic;'
  );

  const bootLog = [];

  function addLog(line) {
    bootLog.push(line);
    logContainer.textContent = bootLog.join('\n');
  }

  // Morph ID
  let morphId = localStorage.getItem('NODE_OS_MORPH_ID');
  if (!morphId) {
    const bytes = crypto.getRandomValues(new Uint8Array(32));
    morphId = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
    localStorage.setItem('NODE_OS_MORPH_ID', morphId);
    addLog(`morph_id CREATED: ${morphId.slice(0, 20)}…`);
  } else {
    addLog(`morph_id restored: ${morphId.slice(0, 20)}…`);
  }

  addLog('NODE_OS cold boot initiated');
  addLog('Power state: 0.00 W (quiescent)');

  const sequence = [
    [1300, 'XENO MATRIX | LIVE'],
    [1000, 'CONNECTING TO ALL-MIND = SUCCESS'],
    [600,  'CONNECTING TO XENO = SUCCESS'],
    [700,  'Contacting HUB VAPOR'],
    [600,  'Manifest v1.0.0 received – '],
    [400,  'Lattice fully coherent'],
    [300,  'NODE | OS ONLINE'],
    [500,  'Handing control to Desktop surface...'],
    [800,  'SURFACE - INIT - MAINVIEW']
  ];

  let i = 0;
  function runNext() {
    if (i < sequence.length) {
      const [delay, text] = sequence[i];
      addLog(text);
      i++;
      setTimeout(runNext, delay);
    } else {
      setTimeout(() => {
        NODEOS();  // Handoff to main NODEOS view
      }, 800);
    }
  }

  runNext();
}

// Run boot
Boot();