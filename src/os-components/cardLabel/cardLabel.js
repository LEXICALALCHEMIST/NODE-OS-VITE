// src/os-components/cardLabel/cardLabel.js — CardLabel with top bar + symbol + title

export default function CardLabel(titleText = 'APP') {
  const labelContainer = document.createElement('div');
  labelContainer.style.cssText = `
    width: 100%;
    max-width: 100%;
    margin: 0 auto 40px;
    text-align: center;
  `;

  // Top bar with symbol
  const topBar = document.createElement('div');
  topBar.style.cssText = `
    height: 2px;
    background: aqua;
    border-radius: 2px;
    margin-bottom: 12px;
    box-shadow: 0 0 18px aqua;
  `;
  labelContainer.appendChild(topBar);

  // Inner label box
  const labelBox = document.createElement('div');
  labelBox.textContent = titleText;
  labelBox.style.cssText = `
    background: #000;
    font-family: 'Orbitron', sans-serif;
    width: 100%;
    color: aqua;
    font-size: 12px;
    padding: 2px;
    border: 1px solid aqua;
    border-radius: 12px;
    display: inline-block;
    text-shadow: 0 0 20px aqua;
    letter-spacing: 4px;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
    
  `;
  labelContainer.appendChild(labelBox);

  return labelContainer;
}