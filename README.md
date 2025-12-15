# Homework 2 – Mobile Combat Calculator ⚔️📱

**Course:** CSCI 4661 / 5661 – Topics in Mobile Application Development  
**Assignment:** Homework #2 – Mobile Combat Calculator  
**Student:** Joshua Reynoso  
**Email:** jreynoso@uno.edu  

---

## 📌 Project Overview

This project is my submission for **Homework 2**, which involved creating a simple mobile game using **React Native** and **Expo**.

The application follows a basic role-playing game (RPG) combat structure. The player creates a character by allocating skill points to various attributes, then engages in turn-based combat against a monster. The game demonstrates state management, reusable components, navigation, and conditional rendering.

---

## 🎮 Game Description

The game consists of **three primary screens**:

### 1️⃣ Welcome Screen
- Displays the game title
- Shows an image representing the game
- Contains a button to start the game and move to character creation

### 2️⃣ Character Creation Screen
- Allows the player to allocate skill points to attributes
- Attributes include:
  - **Strength** – affects attack damage
  - **Health** – determines how much damage the player can take
  - **Magic** – allows special abilities during combat
- Uses a **reusable component** for each attribute
- Uses a **reducer** to manage player stats and remaining skill points
- Prevents illegal actions (negative stats or overspending points)
- The player must spend all points before proceeding to combat

### 3️⃣ Combat Screen
- Displays player and monster stats side-by-side
- Shows an image and name of the monster
- Includes a scrolling combat log
- Provides at least three combat actions:
  - Basic attack
  - Magic attack
  - Healing ability
- The monster counterattacks after player actions
- The game ends in either **victory** or **defeat**, with appropriate messages shown

---

## 🧠 Technical Concepts Used

- JSX for defining screens and UI
- Functional components
- `useState` for tracking game mode
- `useReducer` for managing complex game state
- Reusable child components using props
- Conditional rendering based on state
- `Pressable` components for interactive UI
- Basic layout and styling with `StyleSheet`

---

🎨 Asset Credits

- Dr. Ben Samuel
---

## 🛠️ Technologies Used

- React Native
- Expo
- JavaScript
- Node.js
- Expo Go

---

## ▶️ How to Install and Run

### Prerequisites
- Node.js (LTS)
- npm
- Expo Go app (physical device or emulator)

### Installation
```bash
git clone https://github.com/your-username/mobile-combat-calculator.git
cd mobile-combat-calculator
npm install
npm start

Running the App

Scan the QR code using Expo Go
