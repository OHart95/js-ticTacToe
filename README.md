# 🕹️ JavaScript Browser Tic-Tac-Toe

A modern, responsive web implementation of Tic-Tac-Toe. Unlike the console versions, this project focuses on **DOM Manipulation**, **Event Handling**, and **Dynamic UI Updates**, providing a smooth user experience directly in the browser.

## 🧠 Technical Highlights
* **DOM Event Delegation:** Efficiently manages click events across the game board to trigger state changes.
* **Game Logic Engine:** Features a dedicated logic controller to evaluate win conditions (rows, columns, and diagonals) and draw states after every move.
* **Dynamic UI State:** Real-time updates to the HTML structure to reflect current turns, game status, and final results without page refreshes.
* **Responsive Design:** Utilizes CSS Flexbox/Grid to ensure the game board is playable across desktop and mobile devices.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Architecture:** Functional programming approach to game state management.

## 🚀 Getting Started

1. **Clone the repository:**
  ```bash
  git clone [https://github.com/OHart95/js-ticTacToe.git](https://github.com/OHart95/js-ticTacToe.git)
  ```
Open the project: Simply open index.html in your preferred web browser.

## 🎮 Features
Interactive Grid: High-performance interaction with the 3x3 game board.

Turn Tracking: Clearly displays whether it is Player X or Player O's turn.

Result Detection: Automatic alerts or UI messages when a player wins or the game ends in a draw.

Reset Functionality: Quickly clear the board to start a new match.

## 📝 Project Structure
index.html: The structural foundation of the game board and UI elements.

styles.css: Visual styling, layout, and responsive media queries.

app.js: The core game engine handling logic, event listeners, and DOM updates.

## 📈 Future Roadmap
Animations: Add smooth transitions for appearing markers (X and O).

Dark Mode: Implement a theme switcher for enhanced user preference.

Local Scores: Use localStorage to keep track of wins between browser sessions.
