# copy-branch 📋

Just run `npx copy-branch` to copy your current Git branch name to your clipboard.

```
npx copy-branch
Branch name "release/rc-5.4.1" copied to clipboard!
```

## Why? ✨

Because it's easier. Compare yourself:

- `git branch --show-current | pbcopy` for macOS,
- `git branch --show-current | xclip -selection clipboard` on Linux,
- `git branch --show-current | clip` for Windows, or
- `git branch` and manually copying it.

## Installation 🚀

Not needed! Use it directly with npx: `npx copy-branch`

Want to install it locally? Sure: `npm install -g copy-branch`

## Verbose Mode

Want to see what's happening under the hood?

```
npx copy-branch --verbose
```

```
[INFO] Operating System detected: darwin
[INFO] Found Git in PATH: /usr/local/bin/git
[INFO] Executing git command: /usr/local/bin/git rev-parse --git-dir
[INFO] Confirmed: Current directory is a Git repository
[INFO] Executing git command: /usr/local/bin/git rev-parse --abbrev-ref HEAD
[INFO] Current branch detected: feature/cool-stuff
Branch name "feature/cool-stuff" copied to clipboard!
```

## Requirements 📋

- Node.js (v14 or higher recommended)
- Git installed on your system

## Contributing 🤝

Pull Requests are highly welcome.

- Fork the repo
- Create your feature branch
  - `git checkout -b feature/amazing-thing`
- Commit your changes
  - `git add -A`
  - `git commit -m "Add amazing thing"`
- Push your commits
  - `git push origin feature/amazing-thing`
  - **PRO TIP**: use `npx copy-branch` in this step... 😉
- Open a Pull Request

## Other 👨‍💻

⌚ Built to save time

📜 MIT License

⭐ Star if you find this useful!

📦 npm: copy-branch (https://www.npmjs.com/package/copy-branch)

🐛 Issues: Report a bug (https://github.com/lukas-niessen/copy-branch/issues)
