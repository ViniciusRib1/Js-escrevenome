let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function palavraAleatoria() {
  
  //Arrays são uma variável com mais informações
  let palavras = ["Bom dia", "Boa tarde", "Boa noite"];
  
  return random(palavras);
}

function inicializaCores() {
  
  //Código adicional
  cores = ["red", "green", "blue"];
  
  
  background("white");
  fill(random(cores));
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  
  inicializaCores();

  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
}