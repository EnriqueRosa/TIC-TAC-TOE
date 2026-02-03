// Shift counter and game status
let turno = 0;
let juegoTerminado = false;

// Array representing the board (9 squares)
const tablero = Array(9).fill(null);

// Function executed when clicking a box
const btnPulsado = (e, pos) => {

// If it is occupied or the game is over, it does nothing
    if (tablero[pos] || juegoTerminado) return;

    const btn = e.target;

// We determine the current player (X or O).
    const jugador = turno % 2 === 0 ? "X" : "O";

// We display the X or O and save it in the array.
    btn.textContent = jugador;
    tablero[pos] = jugador;

// We check if anyone has won.
    
    if (haGanado()) {
        alert('Enhorabuena jugador ' + jugador);
        juegoTerminado = true;
        return;
    }

// Si se han llenado todas las casillas y nadie ganó 

    if (turno === 8) {
        alert('Empate');
        juegoTerminado = true;
        return;
    }

// We move on to the next round.

    turno++;
};

// Function that checks if there is a winner
const haGanado = () => {

// We check all possible winning lines

    if (tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]) return true;
    if (tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]) return true;
    if (tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]) return true;
    if (tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]) return true;
    if (tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]) return true;
    if (tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]) return true;
    if (tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]) return true;
    if (tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]) return true;
    return false;
};

// Assign the function to the buttons on the board
document.querySelectorAll('.container button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i))
);

// Reset
document.getElementById('reiniciar').addEventListener('click', () => {
    tablero.fill(null); 
    document.querySelectorAll('.container button').forEach(b => b.textContent = "");
    turno = 0;
    juegoTerminado = false;
});
