---
id: 6
title: Prompt Helper
date: 04-11-2025
description: Prompt Helper helps you turn your rough ideas or plain text into clean, structured prompts, powered by the ChatGPT API.
thumbnail: /works/prompt-helper/thumbnail.png
github: https://github.com/yohanesrioirsan/prompt-helper
---

> Turn your everyday words into well-structured AI prompts no prompt engineering experience required.

**Tech Stack:** Next.js · Tailwind CSS · ReactBits · ChatGPT API

---

![PromptHelper](/works/prompt-helper/thumbnail.png)

## Background

One of the most common frustrations people have with AI tools is not knowing how to ask the right question. They know what they want, but translating that into a clear, effective prompt is a skill most people haven't developed yet. The result is vague outputs that don't match what they were hoping for.

I wanted to solve that gap with a simple tool: describe what you need in plain, everyday language, and let the tool handle the prompt crafting for you.

---

## Problem & Challenge

1. **Prompt translation** How do I take a casual, unstructured sentence and convert it into a well-formed AI prompt?

---

## Solution

![PromptHelper](/works/prompt-helper/511088840-395087ad-ea70-49dc-87ca-89aeffb0bf5b.png)

The core idea was to use AI to improve AI prompts. By setting up an initial system instruction via the ChatGPT API, each user input gets wrapped in a meta-prompt that instructs the model to rephrase and structure the request properly.

```jsx
const promptMessage = `Generate a proper prompt for me. I will give you my sentence, 
and I need you to phrase and craft it into a well-structured AI prompt. 
Here are my words: "${textInput}"`;
```

The response is then returned directly to the user a polished, structured prompt built from whatever they typed, in whatever language or phrasing they naturally used.

```jsx
const response = await axios.get<ApiResponse>(
  `${apiUrl}q=${encodeURIComponent(promptMessage)}&apikey=${apiKey}`,
);

if (response.data?.status && response.data?.data?.message) {
  return Response.json({
    status: "success",
    data: {
      message: response.data.data.message,
    },
  });
}
```

![PromptHelper](/works/prompt-helper/511088948-14d91772-2737-4361-a45f-d9625c5ebc31.png)

---

## Key Features

- **Plain language to AI prompt** Users type naturally; the tool handles the structure
- **No prompt engineering knowledge needed** Accessible to anyone, regardless of AI experience
- **Modern UI** Built with ReactBits for a clean, polished interface
