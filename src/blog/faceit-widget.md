---
title: How to Add FACEIT Stats to OBS
date: 13 January 2026
description: Recently, I got back into playing CS2 on FACEIT, and I’m planning to stream my gameplay again.
---

![FaceitOBS](/public/blog/faceit-widget/faceit-obs.png)

Recently, I got back into playing CS2 on FACEIT, and I’m planning to stream my gameplay again. While setting up my stream, I felt like something was off 😂. I wanted to display my FACEIT stats on screen, such as my current win/loss, level, ELO, and K/D ratio.

After searching the internet, I found several ready-to-use widgets and overlays made by other developers. They were good, but I started wondering: **can I build one myself?**

After some research, I discovered that FACEIT provides an **open API** that developers can access using their own API keys. This means FACEIT data is publicly accessible and can be integrated into custom applications.

So, I decided to build my own solution.

## FaceitOBS

I created **FaceitOBS**, a ready-to-use and easy-to-configure FACEIT widget/overlay that you can directly use in OBS.

You can check it out here:  
👉 https://faceitobs.online/

### Features

- Easy to use
- Free to use
- Simple & aesthetic design
- Auto-updating stats (no need to re-add the source in OBS)

### Tutorial

1. Open https://faceitobs.online/generate
2. Input your nickname in the form (case-sensitive).
   For example, if your nickname is “HadeZ”, enter “HadeZ”, not “hadez”.
   ![FaceitOBS](/public/blog/faceit-widget/tutorial-1.png)
3. After the user is found, you can select the style or theme you want to display in OBS.
   The default style is Classic a black-and-white theme without any gimmicks.
   ![FaceitOBS](/public/blog/faceit-widget/tutorial-2.png)
4. If you’ve already selected the style you want, click the “How To Use” button to get your widget/ overlay URL, which can be used as a Browser Source in OBS.
   ![FaceitOBS](/public/blog/faceit-widget/tutorial-3.png)
5. Follow The Steps. And you are all set!
   ![FaceitOBS](/public/blog/faceit-widget/tutorial-4.png)

This project was built to be lightweight, practical, and streamer-friendly, making it easy for anyone to display their FACEIT stats in real time without extra setup.

If you’re a CS2 streamer who plays on FACEIT and wants a clean overlay for OBS, feel free to give it a try.

If you have a design you’d like to use in FaceitOBS, you can email me at rioirsan8@gmail.com

This project is also open source, and anyone is welcome to contribute at
github.com/yohanesrioirsan/faceit-overlay-obs.
Stars are appreciated, and PRs are welcome.
