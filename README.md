# Group5 (Debug Impact Five) Mini Project:

# 🛒 React & Vite Shopping Cart (Mini Group Project)

## 📖 Overview

This repository contains a Shopping Cart web application built as a mini group project. The primary goal of this project was to understand the core fundamentals of modern front-end development, specifically focusing on component-driven UI, state management, and collaborative development using **React.js** and **Vite**.

## 🚀 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite (for Lightning-fast Hot Module Replacement - HMR)
- **Styling:** Tailwind CSS (Utility-first CSS framework) / Vanilla CSS
- **Version Control:** Git & GitHub

---

## 🧠 What We Learned (Key Takeaways)

Working on this mini-project provided our group with hands-on experience in several critical areas of front-end development:

### 1. Modern React Fundamentals (Under the Hood)

- **JSX & Virtual DOM:** Understanding how React uses JSX to write HTML-like syntax inside JavaScript, and how the Virtual DOM efficiently updates only the parts of the UI that change.
- **Component Architecture:** Breaking down a complex UI into small, reusable building blocks (e.g., `ProductCard`, `CartList`, `Navbar`). We learned the difference between _Presentational Components_ (UI only) and _Container Components_ (Logic/State handling).
- **Props & Unidirectional Data Flow:** Passing data (like product details) and functions (like `addToCart`) down from parent components to child components via `props`.

### 2. State Management

- **`useState` Hook:** Managing local component state, such as keeping track of the items currently in the cart, updating quantities, and calculating the total price dynamically.
- **`useEffect` Hook:** Handling side effects, such as synchronizing our cart data with the browser's `localStorage` so the cart doesn't empty when the page refreshes.
- **Immutability:** Learning why we cannot mutate React state directly (e.g., using `setCart([...cart, newItem])` instead of `cart.push(newItem)`) to trigger proper re-renders.

### 3. Event Handling & Closures

- Managing user interactions safely. We learned how to use arrow functions in event listeners (e.g., `onClick={() => addToCart(product)}`) to prevent functions from executing immediately upon rendering, leveraging JavaScript closures.

### 4. Build Tools & Developer Experience (DX)

- **Vite:** Experiencing the massive speed difference between Vite and older tools like Create React App (CRA). Vite's native ES modules provide instant server starts and rapid HMR, improving our development speed.

### 5. Collaborative Workflow (Group Project)

- **Git Collaboration:** Navigating merge conflicts, branching concepts, and combining different features built by different team members into a single cohesive application.
- **Code Organization:** Structuring a React project cleanly (separating `/components`, `/assets`, and `/data`).

---
