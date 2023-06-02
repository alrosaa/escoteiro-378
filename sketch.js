// Para pontuar a menina tem que mover, conversei com Ivo.
//var cria uma variável
var jogador = [];
var imgObjetos = [];
var objetos = [];
var contador = 0;
var somBomba;
var somObjetos;
var imgAbertura;
var controleTela = "INICIO";





//function preload serve para carregar uma imagem
function preload() {
  imgfundo = loadImage("img/fundo.jpg");
  imgObjetos[0] = loadImage("jogo/imagem/banana.png");
  imgObjetos[1] = loadImage("jogo/imagem/manga.png");
  imgObjetos[2] = loadImage("jogo/imagem/morango.png");
  imgObjetos[3] = loadImage("jogo/imagem/bomba.png");
  imgAbertura= loadImage("img/canva/abertura.gif");

  objetos[0] = new Objetos();
  objetos[1] = new Objetos();
  objetos[2] = new Objetos();
  objetos[3] = new Objetos();
  jogador = new Jogador();
  somBomba = loadSound("audio/som.bomba.mp3");
  somObjetos = loadSound("audio/som.objetos.mp3");
}
//function setup serve para indicar quais propriedades e métodos devem estar disponíveis no template
function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode == 32)
  controleTela = "jogo";
}
//a "function draw" executa o código que está dentro dela infinitamente e uma quantidade específica de vezes, até que haja uma instrução que faça o programa parar.
function draw() {
  if(controleTela == "INICIO"){
    mostraAbertura();
  }
 else{
  executarJogo();
 }
}