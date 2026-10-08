---
id: 8
title: My First Full-Stack App Built with Vibe Coding
date: 30-08-2026
description: "My first attempt at building a full-stack LFG app with an AI coding agent, from an empty folder to a working interface, and what it took to keep the agent on track."
slug: my-first-vibe-code
cover: /images/blog/my-first-vibe-code/2.png
coverAlt: Early homepage of the LFG app with lobby actions and a sample activity feed
---

Lately, I've been trying to build an app with vibe coding from a completely empty folder. Literally starting from nothing and seeing how far I could get.

I ended up building a full-stack LFG (Looking for Group) / party-finder app. The idea was to help players find people to play with, browse lobbies, and organize a party.

This was my first attempt at letting an AI coding agent do the work across the whole app. I wanted to understand what that workflow actually felt like.

## How I was using AI before

Maybe you're thinking, "So you weren't using AI this whole time?" Nah, I was. Before this, I mostly used it as a Google alternative: ask about a problem, get an answer, and move on.

After reading threads and watching other people's workflows, I decided to try building an app with an agent handling the implementation.

And I went all in. Even for small changes to text or colors, I asked the agent to make them. I avoided touching the code myself whenever I could.

## The tools and stack

| Part | What I used |
| --- | --- |
| Coding agent | OpenCode |
| Model | DeepSeek V4 Flash |
| Frontend | Next.js 14 |
| Backend | Laravel 12 |
| Database | PostgreSQL |
| WebSocket | Reverb |

## 1. Starting with TASK.md

The first step was generating `TASK.md`. I used ChatGPT with a simple prompt along the lines of:

> I want to create an app that does blablabla, can you make a TASK.md for my agents?

Nothing fancy. I needed a starting point that explained what the agent was supposed to build.

![TASK.md open in the editor, outlining the game squad platform and its lobby flow](/images/blog/my-first-vibe-code/1.png)

*The initial brief: what the app should do and how players would find and join a lobby.*

I created a project directory and dropped `TASK.md` into it. It was the first file in the folder. Everything else came after.

## 2. Building and revising the UI

Next, I handed the brief to OpenCode with DeepSeek V4 Flash and asked it to build a UI prototype.

![Early homepage prototype with a gaming headline, lobby buttons, and a sample activity feed](/images/blog/my-first-vibe-code/2.png)

*The early homepage prototype, before the later revisions.*

![Early lobby-list prototype with game and region filters and example lobby cards](/images/blog/my-first-vibe-code/3.png)

*The prototype lobby browser, with filters for games and regions.*

It took a bunch of revisions and back-and-forth prompts before I landed on a UI I was happy with.

Once the design was settled, I documented it in `UI_DOCS.md`. I wanted something the agent could refer to when integrating the UI into Next.js, so the decisions wouldn't get lost along the way.

## 3. Building the backend and database

With the UI settled, I moved on to the backend and database. Having `UI_DOCS.md` made it easier to explain what the interface needed and build the backend around it.

This part was fun, but it also felt like brainrot sometimes. I felt more like a prompt engineer than a software engineer, lol. I spent my time writing instructions, checking the result, and asking for revisions.

## Keeping the agent on track across sessions

The trickiest part was keeping the agent consistent when I opened a fresh session. Without the context from earlier work, it felt like starting from scratch.

I kept a `CHANGELOG.md` in both the frontend and backend repositories to record changes and the context behind them. At the start of a new session, I asked the agent to read it before giving it another task.

By that point, I had three documents with different jobs:

- `TASK.md` described what I wanted to build.
- `UI_DOCS.md` recorded the UI decisions for integration.
- `CHANGELOG.md` kept track of changes across sessions.

Keeping those files up to date became part of the workflow.

## What I ended up with

After all the prompting, revising, and burning through a good chunk of tokens, this is where the app landed.

### The homepage

![Satu Party homepage with lobby actions, a how-it-works section, supported games, and a recent lobby](/images/blog/my-first-vibe-code/4.jpg)

*The later homepage, showing the lobby flow and supported games.*

### Browsing and creating a lobby

![Lobby browser with game and region filters, an open lobby card, and a highlighted room belonging to the signed-in user](/images/blog/my-first-vibe-code/5.jpg)

*The lobby browser, including a shortcut to the user's own room.*

![Create-lobby form with fields for the game, region, player count, joining methods, and description](/images/blog/my-first-vibe-code/7.jpg)

*The lobby form, where the host can specify how players should join.*

### Inside a lobby

![Lobby detail page with a countdown, host controls, joining instructions, participant confirmation, and chat](/images/blog/my-first-vibe-code/6.jpg)

*The room view brings the lobby details, joining instructions, and chat together.*

### Player profiles

![Account settings page with profile details, password settings, favorite games, game ranks, and lobby history](/images/blog/my-first-vibe-code/8.jpg)

*The account page, with profile settings and game preferences.*

![Public player profile showing favorite games, rank information, lobby history, and comments](/images/blog/my-first-vibe-code/9.jpg)

*The public profile view, with game information, lobby history, and comments.*

## How it felt after the first attempt

There's still a ton I want to change to make the app smoother. It's far from perfect.

What stood out was how much time I spent on instructions and context. Asking for a change was easy; keeping the agent consistent through revisions and fresh sessions took more effort.

For a first attempt at full vibe coding, I enjoyed both the process and the result. I started with one Markdown file in an empty folder and ended up with an app I could keep working on.
