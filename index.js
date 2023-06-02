let P1 = document.getElementById('p1');
let P2 = document.getElementById('p2');
let replay = document.getElementById('replay');
let resultado2 = document.getElementById('L');
let resultado = document.getElementById('N');
let rodada = document.getElementById('rodada');
let ganhador = document.getElementById('ganhador');
let x = document.getElementById('x');
let atualizar = [];

let jogada1 = 0;
let jogada2 = 0;
let rodadas = 0;
let vitoriasP1 = 0;
let vitoriasP2 = 0;


P1.onclick = function DUELO() {
  let numero = Math.floor(Math.random() * 6) + 1;
  resultado.innerHTML = "JOGADOR 1: " + numero + " -- ";
  P1.disabled = true;
  P2.disabled = false;
  jogada1 = numero;
  
};

P2.onclick = function DUELO2() {
  let numero = Math.floor(Math.random() * 6) + 1;
  resultado2.innerHTML = "-- JOGADOR 2: " + numero ;
  jogada2 = numero;
  P1.disabled = false;
  P2.disabled = true;
  rodadas++;
  rodadaAtual();
  
};

replay.onclick = function () {
  P2.disabled = true;
  P1.disabled = false;
  resultado.innerHTML = "";
  resultado2.innerHTML = "";
  rodada.innerHTML = "";
  ganhador.innerHTML = "";
  x.innerHTML = "";
  jogada1 = 0;
  jogada2 = 0;
  rodadas = 0;
  vitoriasP1 = 0;
  vitoriasP2 = 0;
  atualizar = [];
};

function rodadaAtual() {
  if (jogada1 > jogada2) {
    rodada.innerHTML = `O JOGADOR 1 ganhou a rodada ${rodadas}`;
    vitoriasP1++;
  } else if (jogada2 > jogada1) {
    rodada.innerHTML = `O JOGADOR 2 ganhou a rodada ${rodadas}`;
    vitoriasP2++;
  } else {
    rodada.innerHTML = `Empate na rodada ${rodadas}`;
  }

  if (rodadas === 10) {
    vencedor();
    P1.disabled = true;
    P2.disabled = true;

  }
 
}

function vencedor() {
  if (vitoriasP1 > vitoriasP2) {
    ganhador.innerHTML = "Resultado: JODADOR 1 venceu!";
  
  } else if (vitoriasP2 > vitoriasP1) {
    ganhador.innerHTML = "Resultado: JOGADOR 2 venceu!";
  
  } 
  else if (vitoriasP1 = vitoriasP2){
    ganhador.innerHTML = "Resultado: Empate!";
   
  }
  
}

