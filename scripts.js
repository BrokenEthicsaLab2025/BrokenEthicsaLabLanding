// Scrolling terminal background
const codeLines = [
  "Initializing BrokenEthicsaLab™...",
  "[✓] Importing samples...",
  "[✓] Indexing threats...",
  "[✓] Clustering RAM_SCRAPER...",
  "[✓] Exporting CSV...",
  "Threat UUID: a1b2c3d4 Score: 85 Tags: TARGET_BASH",
  "Threat UUID: e5f6g7h8 Score: 92 Tags: RAM_SCRAPER",
  "Threat UUID: i9j0k1l2 Score: 78 Tags: TARGET_BASH",
  "Threat UUID: m3n4o5p6 Score: 88 Tags: RAM_SCRAPER",
  "Threat UUID: q7r8s9t0 Score: 95 Tags: TARGET_BASH",
  "System ready. Awaiting operator input..."
];

const stream = document.getElementById("code-stream");
let output = "";
for (let i = 0; i < 100; i++) {
  output += codeLines[Math.floor(Math.random() * codeLines.length)] + "\n";
}
stream.textContent = output;

// Interactive terminal simulation
const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");

terminalInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = terminalInput.value.trim();
    let response = "";

    switch (command.toLowerCase()) {
      case "scan --cluster ram_scraper":
        response = "RAM_SCRAPER cluster: 3 threats detected. Severity: High.";
        break;
      case "export --format csv":
        response = "Export complete. File: samples_export.csv";
        break;
      case "simulate --payload bash":
        response = "Simulating bash injection... Payload neutralized.";
        break;
      case "help":
        response = "Available commands:\n- scan --cluster RAM_SCRAPER\n- export --format csv\n- simulate --payload bash";
        break;
      default:
        response = `Command not recognized: ${command}`;
    }

    terminalOutput.innerHTML += `<div><span class="cmd">> ${command}</span><br><span class="res">${response}</span></div>`;
    terminalInput.value = "";
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
});
