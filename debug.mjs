import shell from "shelljs";
import chalk from "chalk";

console.log(chalk.blue("\n[DEBUG] Running Foundry script...\n"));

const result = shell.exec("forge script script/Debug.s.sol --fork-url http://localhost:8545");

const lines = result.stdout.split("\n");

lines.forEach(line => {
  if (line.includes("Script ran successfully")) {
    console.log(chalk.cyan(`[INFO] ${line.trim()}`));
  } else if (line.includes("== Logs ==")) {
    // Skip this header line or format differently
  } else if (line.includes("=")) {
    console.log(chalk.green(`[LOG] ${line.trim()}`));
  } else if (line.trim() !== "") {
    console.log(chalk.gray(`[TRACE] ${line.trim()}`));
  }
});
