// Contador de turnos y estado del juego
let turno = 0;
let juegoTerminado = false;

// Array que representa el tablero (9 casillas)
const tablero = Array(9).fill(null);


// Función que se ejecuta cuando pulsamos un botón/casilla
const btnPulsado = (e, pos) => {

// Si la casilla ya está ocupada o el juego terminó, no hacemos nada
    if (tablero[pos] || juegoTerminado) return;

    const btn = e.target;
// Determinamos el jugador actual (X o O)
    const jugador = turno % 2 === 0 ? "X" : "O";

// Mostramos la X o O en la casilla y guardamos en el array
    btn.textContent = jugador;
    tablero[pos] = jugador;

// Comprobamos si alguien ha ganado

    if (haGanado()) {
        alert('Enhorabuena jugador ' + jugador);
        juegoTerminado = true;
        return;
    }

// Si se han llenado todas las casillas y nadie ganó → empate

    if (turno === 8) {
        alert('Empate');
        juegoTerminado = true;
        return;
    }

// Pasamos al siguiente turno

    turno++;
};

// Función que comprueba si hay un ganador
const haGanado = () => {

// Comprobamos todas las posibles líneas ganadoras

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

// Dashboard asignamos la función a todos los botones del tablero
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
