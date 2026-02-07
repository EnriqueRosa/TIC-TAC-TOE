// Turn counter and game status
let turn = 0;
let gameOver = false;

// Array representing the board (9 squares)
const board = Array(9).fill(null);

// Function executed when clicking a box
const buttonPressed = (e, pos) => {

    // If it is occupied or the game is over, do nothing
    if (board[pos] || gameOver) return;

    const btn = e.target;

    // Determine the current player (X or O)
    const player = turn % 2 === 0 ? "X" : "O";

    // Display the X or O and save it in the array
    btn.textContent = player;
    board[pos] = player;

    // Check if anyone has won
    if (hasWon()) {
        alert('Congratulations player ' + player);
        gameOver = true;
        return;
    }

    // If all squares are filled and nobody won
    if (turn === 8) {
        alert('Draw');
        gameOver = true;
        return;
    }

    // Move on to the next turn
    turn++;
};

// Function that checks if there is a winner
const hasWon = () => {

    // Check all possible winning lines
    if (board[0] == board[1] && board[0] == board[2] && board[0]) return true;
    if (board[3] == board[4] && board[3] == board[5] && board[3]) return true;
    if (board[6] == board[7] && board[6] == board[8] && board[6]) return true;
    if (board[0] == board[3] && board[0] == board[6] && board[0]) return true;
    if (board[1] == board[4] && board[1] == board[7] && board[1]) return true;
    if (board[2] == board[5] && board[2] == board[8] && board[2]) return true;
    if (board[0] == board[4] && board[0] == board[8] && board[0]) return true;
    if (board[2] == board[4] && board[2] == board[6] && board[2]) return true;
    return false;
};

// Assign the function to the buttons on the board
document.querySelectorAll('.container button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => buttonPressed(e, i))
);

// Reset
document.getElementById('reset').addEventListener('click', () => {
    board.fill(null); 
    document.querySelectorAll('.container button').forEach(b => b.textContent = "");
    turn = 0;
    gameOver = false;
});

