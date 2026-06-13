---
id: 7
title: Customize WSL with Oh-My-Posh
date: 11-05-2026
description: One of my hobbies is exploring customization. In my previous post, I wrote about customizing your Spotify client tweaking the UI and even adding an ad-blocker.
slug: custom-terminal-ui
---

![Oh My Posh Terminal](/blog/custom-terminal/Screenshot091439.png)

One of my hobbies is exploring customization. In my previous post, I wrote about customizing your Spotify client tweaking the UI and even adding an ad-blocker. This time, I want to share how to customize your terminal with **Oh My Posh**.

**Oh My Posh** is a customizable and fast prompt engine that works with any shell you use daily. It supports Windows Terminal and Linux. In this post, I'll walk through the setup using **WSL (Windows Subsystem for Linux)**, since that's what I use every day.

> If you're on a different OS, check the official docs:
>
> - **Windows:** https://ohmyposh.dev/docs/installation/windows
> - **macOS:** https://ohmyposh.dev/docs/installation/macos
> - **Official docs:** https://ohmyposh.dev/docs/

---

## Step 1 Install Oh My Posh

Run this script inside your WSL or Linux terminal:

```bash
curl -s https://ohmyposh.dev/install.sh | bash -s
```

> This installs the binary to `~/.local/bin` by default. To use a custom location, use the `-d` flag:
>
> ```bash
> curl -s https://ohmyposh.dev/install.sh | bash -s -- -d ~/bin
> ```

---

## Step 2 Verify the Installation

```bash
oh-my-posh --version
```

**Getting a `command not found` error?** Add `~/.local/bin` to your PATH:

```bash
export PATH=$PATH:~/.local/bin
```

Then test again:

```bash
oh-my-posh --version
```

Once it works, make the change permanent by adding it to your `.bashrc`:

```bash
nano ~/.bashrc
```

Scroll to the bottom and add these two lines:

```bash
export PATH=$PATH:~/.local/bin
eval "$(oh-my-posh init bash)"
```

Save and exit: `Ctrl+X` → `Y` → `Enter`

Then reload your config:

```bash
source ~/.bashrc
```

Your terminal is now using Oh My Posh's default theme but you'll likely notice broken symbols. That's because Oh My Posh is designed to use **Nerd Fonts**.

---

## Step 3 Install a Nerd Font

1. Browse and download a font from [nerdfonts.com](https://www.nerdfonts.com/font-downloads)
2. Install the font on your system
3. Open **Windows Terminal Settings** → select your WSL profile → scroll down to **Appearance** → change the **Font Face** to the Nerd Font you installed

![Font Settings](/blog/custom-terminal/Screenshot091716.png)

After installing the font, the prompt icons and glyphs should render correctly.

---

## Step 4 Apply a Theme

Browse the full theme gallery here: https://ohmyposh.dev/docs/themes

**List available built-in themes:**

```bash
ls ~/.cache/oh-my-posh/themes/
```

**Preview a theme without saving it:**

```bash
oh-my-posh init bash --config ~/.cache/oh-my-posh/themes/{THEMENAME}.omp.json
```

**Apply a theme permanently:**

Open your `.bashrc`:

```bash
nano ~/.bashrc
```

Find the existing Oh My Posh line and update it, or add a new one at the bottom. For example, to use the `paradox` theme:

```bash
eval "$(oh-my-posh init bash --config ~/.cache/oh-my-posh/themes/paradox.omp.json)"
```

Save and exit: `Ctrl+X` → `Y` → `Enter`

Reload the config:

```bash
source ~/.bashrc
```

![Customized Terminal](/blog/custom-terminal/screeshot.png)

---

## You're All Set! 🎉

Your terminal is now fully themed with Oh My Posh. From here, you can:

- Switch between themes by updating the config path in `.bashrc`
- Customize colors in Windows Terminal settings
- Try different Nerd Fonts to find the one you like best

Happy customizing!
