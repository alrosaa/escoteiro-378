class Objetos {
    //constructor pode ser utilizada para instanciar um objeto utilizando a palavra reservada new
    constructor() {
      //this é um “pronome” é utilizado quando precisamos nos referir ao objeto atual
      this.imagem = imgObjetos[int(random(0, 4))];
      this.posX = random(10, 580);
      this.posY = 0;
      this.velocidade = random(1, 5);
      this.largura = 30;
      this.altura = 40;
  
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
    mova() {
      image(this.imagem, this.posX, this.posY, this.largura, this.altura);
      this.posY += this.velocidade;
      this. xInicial = this.posY;
      this.xFinal = this.posY + this.altura;
      this.yInicial = this.posX;
      this.yFinal = this.posX + this.largura;
    }
  }