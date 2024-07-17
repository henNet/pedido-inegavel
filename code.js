function esquivar() {
  let btnNao = document.querySelector("#btnNao");

  btnNao.style.position = "absolute";
  btnNao.style.top = mudarPosicao(10, 90);
  btnNao.style.left = mudarPosicao(10, 90);
}

function mudarPosicao(min, max) {
  let position = Math.random() * (max - min) + min;

  return position + "%";
}

function esquivarMobile() {
  esquivar();
  setTimeout(esquivarMobile, 200);
}

if (window.innerWidth < 450) {
  setTimeout(esquivarMobile, 200);
}

function respostaSim() {
  alert("😍😍😍😍😍");
}
