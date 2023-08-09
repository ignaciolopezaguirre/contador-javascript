// llamamos a los elementos del HTML

const resultado = document.querySelector("#resultado");
const btnAumentar = document.querySelector(".btn-aumentar");
const btnDisminuir = document.querySelector(".btn-disminuir");
const btnReset = document.querySelector(".btn-reset");

let contador = 0;

btnAumentar.addEventListener("click", () => {
  contador++;
  //resultado.innerHTML = contador;
  updateResultado();
});

btnDisminuir.addEventListener("click", () => {
  contador--;
  //resultado.innerHTML = contador;
  updateResultado();
});

btnReset.addEventListener("click", () => {
  contador = 0;
  //resultado.innerHTML = contador;
  updateResultado();
});

function updateResultado() {
  resultado.innerHTML = contador;
}


   