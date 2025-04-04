# copy-branch 📋

![npm](https://img.shields.io/npm/v/copy-branch) ![GitHub](https://img.shields.io/github/license/your-username/copy-branch) ![npm downloads](https://img.shields.io/npm/dt/copy-branch)

# For Vanilla Git Gangster Devs 🥷🦅

One command to rule them all - Instantly copy your current Git branch name to your clipboard with style and ease! Whether you're a developer juggling multiple branches or just need a quick way to share your branch name, copy-branch has got you covered.

Why copy-branch? ✨

- Fast: Copies your current Git branch name in a snap
- Cross-platform: Works on Windows, macOS, and Linux
- Smart: Detects if you're in a Git repository
- Verbose mode: Get detailed insights when you need them
- Zero config: Just run it with npx and go!

Perfect for:

- Sharing branch names in PRs
- Quick commits
- Team collaboration
- Looking cool while doing it 😎

Installation 🚀

No installation needed! Use it directly with npx:

npx copy-branch

Want to install it locally? Sure thing:
npm install -g copy-branch

Usage 🎯

Basic Usage
Run it in any Git repository:
npx copy-branch
Output:
Branch name "feature/cool-stuff" copied to clipboard!

Verbose Mode
Want to see what's happening under the hood?
npx copy-branch --verbose
Output:
[INFO] Operating System detected: darwin
[INFO] Found Git in PATH: /usr/local/bin/git
[INFO] Executing git command: /usr/local/bin/git rev-parse --git-dir
[INFO] Confirmed: Current directory is a Git repository
[INFO] Executing git command: /usr/local/bin/git rev-parse --abbrev-ref HEAD
[INFO] Current branch detected: feature/cool-stuff
Branch name "feature/cool-stuff" copied to clipboard!

Not in a Git repo?
No worries, we'll let you know:
This directory is not a Git repository. Please navigate to a Git repository and try again.

Features 🌟

- Smart Git Detection: Finds Git executable across all platforms
- Clipboard Magic: Copies your branch name instantly
- Verbose Logging: Detailed output with --verbose flag
- Error Handling: Graceful messages for non-Git directories
- Lightweight: Minimal dependencies, maximum efficiency

Requirements 📋

- Node.js (v14 or higher recommended)
- Git installed on your system

Contributing 🤝

Love copy-branch? Want to make it even better? Contributions are welcome!

1. Fork the repo
2. Create your feature branch (git checkout -b feature/amazing-thing)
3. Commit your changes (git commit -m "Add amazing thing")
4. Push to the branch (git push origin feature/amazing-thing)
5. Open a Pull Request

Check out the GitHub repository (https://github.com/your-username/copy-branch) for more details!

License 📜

MIT License - See LICENSE (LICENSE) for details.

Author 👨‍💻

Built with ❤️ by Lukas Nießen (https://github.com/your-username)

⭐ Star us on GitHub if you find this useful!  
📦 npm: copy-branch (https://www.npmjs.com/package/copy-branch)  
🐛 Issues: Report a bug (https://github.com/lukas-niessen/copy-branch/issues)

Happy branching! 🌳🥷🦅
