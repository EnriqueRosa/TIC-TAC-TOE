let turno = 0;
const tablero = [];


const btnPulsado = (e, pos) =>{
    if (tablero[pos]) return;
    const btn = e.target;
    const jugador = turno % 2 === 0 ? "X" : "O"
    btn.textContent = jugador;
    tablero[pos] = jugador;
    if(haGanado()) { alert('Enhorabuena player' + jugador);
    return;
}

    turno++;
};


const haGanado = () =>{
    if(tablero[0] == tablero [1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero [4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero [7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero [3] && tablero[0] == tablero[6] && tablero[0]){
        return true;   
    }else if(tablero[1] == tablero [4] && tablero[1] == tablero[7] && tablero[1]){
        return true;   
    }else if(tablero[2] == tablero [5] && tablero[2] == tablero[8] && tablero[2]){
        return true;   
    }else if(tablero[0] == tablero [4] && tablero[0] == tablero[8] && tablero[0]){
        return true;   
    }else if(tablero[2] == tablero [4] && tablero[2] == tablero[6] && tablero[2]){
        return true;   
    }
    return false
}

//Dashboard
document.querySelectorAll('.container button').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i))
);

//Reset Button
const btnReiniciar = document.getElementById('reiniciar');
btnReiniciar.addEventListener('click', () => {
    tablero.fill(null);
    document.querySelectorAll('.container button').forEach(b => b.textContent = "");
    turno = 0;
});