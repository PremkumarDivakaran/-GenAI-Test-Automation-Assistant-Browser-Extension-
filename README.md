# 🌟 GenAI Test Automation Assistant Browser Extension

> A next-generation Chrome browser extension that empowers you to automate web applications using Selenium or Playwright, powered by Generative AI.

---

## 🚀 Overview

**GenAI Test Automation Assistant Browser Extension** is designed to bridge the gap between intelligent AI-driven test generation and browser automation.  
With this extension, you can:

- Generate test cases automatically using GenAI.
- Integrate with Selenium or Playwright to execute tests.
- Easily record actions, update selectors, and maintain tests even as your app evolves.

---

## ✨ Key Features

- 💡 **AI-Powered Test Case Generation**  
  Use generative AI to create smart, context-aware test cases.

- ⚡ **Record & Replay User Actions**  
  Capture user interactions on web pages to generate baseline scripts.

- 🔄 **Dynamic Selector Updates**  
  Automatically update locators or selectors when UI changes.

- 🧩 **Selenium / Playwright Integration**  
  Execute generated tests using popular frameworks.

- 📄 **Test Report Generation**  
  Get real-time feedback and summaries after each test run.

- 🌐 **Works Across Web Applications**  
  Designed to support most modern web apps seamlessly.

---

## 🛠️ Architecture

```plaintext
[Browser Extension Popup UI] ---> [Content Script] ---> [Background Script]
                                         │
                                         ▼
                           [Local/Remote Node Service (Selenium / Playwright)]
                                         │
                                         ▼
                                 [GenAI Backend / API]
