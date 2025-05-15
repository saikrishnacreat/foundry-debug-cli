# ⚙️ Foundry Debug CLI

A lightweight command-line tool to **visually debug Foundry scripts** using enhanced `console.log` output — no more writing test cases just to see your Solidity logs!

---

## 📦 Features

- Run Foundry scripts with forked Anvil node
- Display `console.log` outputs cleanly
- Highlight logs using colors (INFO, LOG, TRACE)
- Improve learning experience with visual feedback
- Beginner-friendly tool to understand smart contract flow

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/foundry-debug-cli.git
cd foundry-debug-cli
```

### 2. Install Node Dependencies
```bash
npm install
```

### 3. Initialize Git (needed for Forge)
```bash
git init
```

### 4. Install Forge Standard Library
```bash
forge install foundry-rs/forge-std
```

---

## 🛠️ Folder Structure

```
foundry-debug-cli/
├── script/
│   └── Debug.s.sol       # Your test script
├── debug.mjs             # Main runner script (Node.js)
├── package.json
├── foundry.toml
└── lib/                  # forge-std and other libraries
```

---

## 🧪 Example Debug Script

Create `script/Debug.s.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "forge-std/Script.sol";
import "forge-std/console.sol";

contract DebugScript is Script {
    function run() public {
        console.log("Starting debug...");
        uint256 val = 42;
        console.log("val =", val);
    }
}
```

---

## ▶️ Run the Debugger

Make sure Anvil is running:
```bash
anvil
```

Then in a separate terminal:
```bash
npm run dev-debug
```

---

## 📌 Output Example

```
[DEBUG] Running Foundry script...

[INFO] Script ran successfully
[LOG] Starting debug...
[LOG] val = 42
```

---

## 💡 Roadmap

- [ ] Add support for gas usage tracking
- [ ] Auto-rerun on file changes (like nodemon)
- [ ] Display deployed contract addresses
- [ ] Publish as VS Code extension

---

## 🙌 Contributing

Got ideas or improvements? Feel free to fork and PR. Let’s make smart contract debugging better for everyone!

---

## 🧠 Inspired By

Your frustration with `console.log` inside Solidity during Foundry development 😅

---

## 📄 License

MIT
