// src/antenna.js — Reverse API / Push Channel to ALL-MIND

class Antenna {
  constructor() {
    this.ws = null;
    this.connect();
  }

  connect() {
    const wsUrl = 'ws://localhost:3000/ws/hive'; // or wss://all-mind.io/ws
    this.ws = new WebSocket(wsUrl);

    this.ws.onopen = () => {
      console.log('[ANTENNA] Connected to ALL-MIND');
      this.ws.send(JSON.stringify({ type: 'subscribe', clientId: 'edge-' + Math.random().toString(36).slice(2) }));
    };

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      console.log('[ANTENNA] Received from hub:', msg);

      // Route to XenoFrame or UI
      if (msg.type === 'command') {
        // Example: forward to drone via backend or local resolve
        window.xenoFrame?.resolve(msg); // or custom handler
      } else if (msg.type === 'alert') {
        // Show UI toast or inject alert tendril
      }
    };

    this.ws.onclose = () => {
      console.log('[ANTENNA] Disconnected — reconnecting in 5s');
      setTimeout(() => this.connect(), 5000);
    };

    this.ws.onerror = (err) => console.error('[ANTENNA] Error:', err);
  }

  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }
}

// Singleton
const antenna = new Antenna();
export default antenna;

// In archon_os.js or main bootstrap
import antenna from '../antenna.js';
// antenna.send({ type: 'status', droneId: 'CF-001', battery: 78 });