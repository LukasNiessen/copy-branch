#!/usr/bin/env node

import execa from "execa";
import clipboardy from "clipboardy";
import { existsSync } from "fs";
import os from "os";

// Check if --verbose flag is present
const isVerbose = process.argv.includes("--verbose");

// Logging function that only outputs when verbose is enabled
function log(message) {
  if (isVerbose) {
    console.log(`[INFO] ${message}`);
  }
}

// Function to get Git path based on OS
async function findGitPath() {
  const platform = os.platform();
  log(`Operating System detected: ${platform}`);

  try {
    // Try using the PATH - Works on all operating systems
    if (platform === "win32") {
      // Windows uses 'where'
      const { stdout } = await execa("where", ["git"]);
      const gitPaths = stdout.trim().split(/\r?\n/);
      if (gitPaths.length > 0) {
        log(`Found Git in PATH: ${gitPaths[0]}`);
        return gitPaths[0];
      }
    } else {
      // macOS and Linux use 'which'
      const { stdout } = await execa("which", ["git"]);
      if (stdout.trim()) {
        log(`Found Git in PATH: ${stdout.trim()}`);
        return stdout.trim();
      }
    }
  } catch (error) {
    log(`Git not found in PATH: ${error.message}`);
    log("Checking common installation locations...");
  }

  // Common installation paths by OS
  let commonPaths = [];

  if (platform === "win32") {
    commonPaths = [
      "C:\\Program Files\\Git\\cmd\\git.exe",
      "C:\\Program Files (x86)\\Git\\cmd\\git.exe",
      "C:\\Program Files\\Git\\bin\\git.exe",
      "C:\\Program Files (x86)\\Git\\bin\\git.exe",
    ];
  } else if (platform === "darwin") {
    commonPaths = [
      "/usr/bin/git",
      "/usr/local/bin/git",
      "/opt/homebrew/bin/git",
    ];
  } else {
    commonPaths = ["/usr/bin/git", "/usr/local/bin/git"];
  }

  log(`Checking ${commonPaths.length} common Git installation paths`);
  for (const gitPath of commonPaths) {
    if (existsSync(gitPath)) {
      log(`Found Git at: ${gitPath}`);
      return gitPath;
    }
  }

  log("Falling back to 'git' command directly");
  return "git";
}

async function runGitCommand(gitPath, args, options = {}) {
  log(`Executing git command: ${gitPath} ${args.join(" ")}`);
  return await execa(gitPath, args, options);
}

async function getCurrentBranch(gitPath) {
  try {
    const { stdout } = await runGitCommand(gitPath, [
      "rev-parse",
      "--abbrev-ref",
      "HEAD",
    ]);
    log(`Current branch detected: ${stdout.trim()}`);
    return stdout.trim();
  } catch (error) {
    log(`Git command failed: ${error.message}`);
    return null;
  }
}

async function isGitRepository(gitPath) {
  try {
    await runGitCommand(gitPath, ["rev-parse", "--git-dir"]);
    log("Confirmed: Current directory is a Git repository");
    return true;
  } catch (error) {
    log(`Not a git repository: ${error.message}`);
    return false;
  }
}

async function main() {
  try {
    // Find Git executable
    const gitPath = await findGitPath();

    if (!gitPath) {
      console.error(
        "Git executable not found. Please ensure Git is installed."
      );
      process.exit(1);
    }

    // Check if current directory is a git repository
    if (!(await isGitRepository(gitPath))) {
      console.error(
        "This directory is not a Git repository. Please navigate to a Git repository and try again."
      );
      process.exit(1);
    }

    const branch = await getCurrentBranch(gitPath);
    if (branch) {
      try {
        await clipboardy.write(branch);
        console.log(`Branch name "${branch}" copied to clipboard!`);
      } catch (error) {
        console.error("Failed to copy to clipboard:", error.message);
        process.exit(1);
      }
    } else {
      console.error("Could not determine the current branch name.");
      process.exit(1);
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error.message);
    process.exit(1);
  }
}

main();
