---
id: 7
title: FaceitOBS
date: 06-01-2026
description: FACEIT CS2 stats overlay for OBS. Auto-updating overlay that displays your K/D, ELO, WinRate, and recent match history in real-time on your live stream.
thumbnail: /works/faceit-obs/thumbnail.png
github: https://github.com/yohanesrioirsan/faceit-overlay-obs
site: https://www.faceitobs.online/
---

> An OBS browser widget that displays live FACEIT stats during your stream no alt-tabbing, no manual refreshes.

**Tech Stack:** Next.js · TailwindCSS · FACEIT Open API

---

![FaceitOBS](/works/faceit-obs/header.png)

## Background

I'm a casual-but-passionate Counter-Strike player who occasionally streams to a small audience (mostly one loyal friend). I wanted to display my FACEIT stats ELO, K/D ratio, and recent match results as an overlay on my stream. The problem was that every solution I found required me to alt-tab out of the game and manually update the information myself, which broke the flow entirely.

After searching around, I found a handful of ready-to-use widgets built by other developers. They worked, but it got me thinking: **could I build one myself?**

That curiosity led me to discover that FACEIT provides an open API, accessible via a developer API key, which lets anyone pull public player data into their own applications. That was all the motivation I needed.

---

## Problems & Challenges

1. **Auto-updating stats** How do I display stats that stay current without requiring a manual refresh?
2. **Data filtering** Out of everything the API returns, which stats are actually worth showing?
3. **Widget design** Can I make something that looks good on a stream, even without a design background?

---

## Solutions

### 1. Live Stats Without Manual Refreshes

![FaceitOBS](/works/faceit-obs/feat1.png)

I served the widget as a web page loaded through OBS's Browser Source. The page polls the FACEIT API on an interval and uses a smart polling strategy: when a stat change is detected (e.g., a new match result or ELO update), it temporarily switches to a faster 45-second refresh cycle. After 5 minutes, it falls back to the normal interval (configurable, defaulting to 90 seconds).

```jsx
useEffect(() => {
  if (!data || !previousDataRef.current) {
    previousDataRef.current = data;
    return;
  }

  // Detect changes: new match, ELO shift, etc.
  const statsChanged =
    previousDataRef.current.statistic.faceit_elo !==
      data.statistic.faceit_elo ||
    JSON.stringify(previousDataRef.current.statistic.recent_matches_history) !==
      JSON.stringify(data.statistic.recent_matches_history);

  if (statsChanged) {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (fastPollingTimeoutRef.current)
      clearTimeout(fastPollingTimeoutRef.current);

    // Switch to faster polling (45s) after a detected change
    intervalRef.current = setInterval(() => fetchStats(nickname), 45000);

    // Revert to normal polling after 5 minutes
    const normalInterval = Math.max(
      30000,
      Math.min(parseInt(stringParams.get("refresh") || "90000", 10), 600000),
    );

    fastPollingTimeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(
        () => fetchStats(nickname),
        normalInterval,
      );
      fastPollingTimeoutRef.current = null;
    }, 300000);
  }

  previousDataRef.current = data;

  return () => {
    if (fastPollingTimeoutRef.current)
      clearTimeout(fastPollingTimeoutRef.current);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [data, nickname]);
```

> Full source: [github.dev/yohanesrioirsan/faceit-overlay-obs](https://github.dev/yohanesrioirsan/faceit-overlay-obs)

---

### 2. Surfacing the Right Stats

After reviewing the FACEIT API response, I identified the stats that matter most to streamers: ELO, K/D ratio, win rate, and today's win/loss record. The API route processes the raw data and returns a clean, focused payload to the frontend.

```jsx
return NextResponse.json({
  status: 200,
  data: {
    nickname: playerDetails?.nickname,
    avatar: playerDetails?.avatar,
    statistic: {
      regional_rank: playerRegionalRank?.position ?? "unranked",
      is_challenger: playerRegionalRank?.position <= 1000,
      recent_matches_history: playersHistory,
      kd_ratio: playersStatistic?.lifetime["Average K/D Ratio"],
      win_rate: playersStatistic?.lifetime["Win Rate %"],
      faceit_elo: playerDetails?.games?.cs2?.faceit_elo,
      skill_level: playerDetails?.games?.cs2?.skill_level,
      today: {
        wins: todayWins,
        losses: todayLosses,
        matches_played: todayWins + todayLosses,
      },
    },
  },
});
```

---

### 3. Design Approach

![FaceitOBS](/works/faceit-obs/feat2.png)

Design isn't my strongest suit, so I leaned into minimalism a clean, no-frills layout that puts the stats front and center. The goal was something functional and unobtrusive that wouldn't distract from the game. That said, the project is open to contributors who want to take the visuals further.

---

## Key Features

- **Live FACEIT stats** ELO, K/D ratio, win rate, and today's W/L, updating automatically
- **Smart polling** Faster refresh cadence after match events, with a graceful fallback to normal intervals
- **Minimalist overlay** Designed to inform, not distract
- **Lightweight** No heavy dependencies; runs entirely in OBS's Browser Source
- **Easy setup** Just add your FACEIT API key and player nickname to get started
