# ⚡ AI Code Explainer

An Angular + TypeScript web application that uses the Groq AI API to explain code in a clear, structured and beginner-friendly way.

![Angular](https://img.shields.io/badge/Angular-17-red) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Groq AI](https://img.shields.io/badge/Groq-LLaMA_3.3_70B-purple) ![License](https://img.shields.io/badge/License-MIT-green)

---

## About The Project

AI Code Explainer is a web application that helps developers and students understand code instantly. Simply paste your code, select the programming language, and get a detailed AI-powered explanation in seconds.

---

## Features

- Instant AI-powered code explanations
- Supports 9 programming languages
- Structured explanation in 4 clear sections
- Explanation history panel
- One-click copy button
- Clean dark mode UI
- Loading spinner animation

---

## AI Explanation Structure

Every explanation is broken down into:

- OVERVIEW - What the code does in simple terms
- LINE BY LINE - Detailed breakdown of each part
- KEY CONCEPTS - Programming concepts used
- POTENTIAL IMPROVEMENTS - Suggestions to improve the code

---

## Tech Stack

- Angular 17 - Frontend framework
- TypeScript - Programming language
- Groq AI API - AI explanation engine
- LLaMA 3.3 70B - AI model
- CSS3 - Styling and dark mode UI

---

## Installation and Setup

1. Clone the repository

git clone https://github.com/techkar1m/ai-code-explainer.git
cd ai-code-explainer

2. Install dependencies

npm install

3. Get a free Groq API Key
- Go to https://console.groq.com
- Sign up for a free account
- Click API Keys then Create API Key
- Copy your key

4. Add your API key
Open src/app/app.ts and replace:
private apiKey = 'YOUR_GROQ_API_KEY_HERE';
with your actual key.

5. Run the app

ng serve

6. Open in browser

http://localhost:4200

---

## Project Structure

ai-chat-app/
├── src/
│   ├── app/
│   │   ├── app.ts          - Main component logic
│   │   ├── app.html        - UI template
│   │   └── app.css         - Styling
│   ├── main.ts             - App entry point
│   └── index.html          - Root HTML
├── angular.json            - Angular configuration
└── package.json            - Dependencies

---

## How To Use

1. Open the app at http://localhost:4200
2. Paste any code into the left panel
3. Select the programming language from the dropdown
4. Click Explain Code
5. Read the AI explanation on the right panel
6. Click Copy to copy the explanation
7. Click History to view previous explanations

---

## Supported Languages

- JavaScript
- TypeScript
- Python
- Java
- C#
- C++
- HTML
- CSS
- SQL

---

## Acknowledgements

- Groq for the free ultra-fast AI API
- Angular for the amazing framework
- Meta for the LLaMA 3.3 70B model

---

## License

This project is licensed under the MIT License.

---

Made with love by techkar1m
