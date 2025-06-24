const game = document.getElementById('game');
const statusDiv = document.getElementById('status');

let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let currentPlayer = 'X';
let gameOver = false;

// Create the board
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = i;
    cell.dataset.col = j;
    cell.addEventListener('click', handleClick);
    game.appendChild(cell);
  }
}

function handleClick(e) {
  if (gameOver) return;

  const row = e.target.dataset.row;
  const col = e.target.dataset.col;

  if (board[row][col] !== '') return;

  board[row][col] = currentPlayer;
  e.target.textContent = currentPlayer;

  if (isWinner(currentPlayer)) {
    statusDiv.textContent = `Player ${currentPlayer} wins!`;
    gameOver = true;
  } else if (isDraw()) {
    statusDiv.textContent = `It's a draw!`;
    gameOver = true;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDiv.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function isWinner(player) {
  // Check rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) return true;
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) return true;
  }

  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;

  return false;
}

function isDraw() {
  return board.flat().every(cell => cell !== '');
}

function resetGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 'X';
  gameOver = false;
  statusDiv.textContent = `Player ${currentPlayer}'s turn`;
  document.querySelectorAll('.cell').forEach(cell => (cell.textContent = ''));
}
