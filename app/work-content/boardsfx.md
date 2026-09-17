---
id: 8
title: BoardSFX
date: 08-08-2026
description: Board SFX is a free desktop soundboard for streamers to trigger sound effects with a single keyboard shortcut.
thumbnail: /works/boardsfx/thumbnail.png
site: https://www.boardsfx.fun/
---

> Board SFX is a free desktop soundboard for streamers to trigger sound effects with a single keyboard shortcut no clicking around mid-game.

**Tech Stack:** Tauri 2 (Rust), React, Vite, TailwindCSS

---

![BoardSFX](/works/boardsfx/thumbnail.png)

## Background

Lately I've been watching a lot of livestreams/podcasts while working, and some of the streamers I watch often play soundboard sounds during their stream. But there's one streamer who still plays soundboard clips manually (honestly I forget their name lol) every time they want to play a sound, they open Windows search and type the name of the mp3 file saved on their computer. I'm just assuming they didn't have a Stream Deck for soundboard macros at the time.

I remembered using an app before that runs in the background but still produces sound even while running in the background, an app that plays mechanical keyboard sounds when you press a key. So I got inspired to make soundboard sounds play when you press a key, using the same system as this mechanical keyboard app.

---

## Problems & Challenges

**Keeping it lightweight** How do I build an app like this without it turning into a heavy Electron-style program that eats RAM while the user is already running a game, OBS, and a browser?

## Solution

I built it with **Tauri + Vite**. Tauri uses the system's native webview instead of bundling a whole browser engine, and the core runs in Rust, so the app stays small and sits at around **3MB of RAM** in the background. Vite handles the frontend with fast builds and instant hot reload during development.

---

![BoardSFX](/works/boardsfx/desktop-app.png)

---

## Key Features

1. **Lightweight** Under 3MB of RAM and just 15MB of disk space.
2. **Unlimited Slots** Import as many sounds as you want, no slot limits.
3. **Instant Fire** Near 0ms delay. Hit your key and KABOOM, your sound is out.
