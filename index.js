#!/usr/bin/env node

const clipboardy = require("clipboardy");
const execa = require("execa");

async function getCurrentBranch() {
  try {
    // Execute git command to get current branch
    const { stdout } = await execa("git", [
      "rev-parse",
      "--abbrev-ref",
      "HEAD",
    ]);
    return stdout.trim();
  } catch (error) {
    // If git command fails, it's likely not a git repository
    return null;
  }
}

async function main() {
  const branch = await getCurrentBranch();

  if (branch) {
    try {
      await clipboardy.write(branch);
      console.log(`Branch name "${branch}" copied to clipboard!`);
    } catch (error) {
      console.error("Failed to copy to clipboard:", error.message);
      process.exit(1);
    }
  } else {
    console.log(
      "Hint: This directory is not a Git repository. Please run this command in a Git repository."
    );
    process.exit(1);
  }
}

main().catch((error) => {
  console.error("An error occurred:", error.message);
  process.exit(1);
});
