class Jogador {
    constructor() {
      //não esquecer de colocar "loadImage"
      this.imagem = loadImage("jogo/imagem/menina.png");
      this.posX = 200;
      this.posY = 300;
      this.velocidade = 5;
      this.altura = 70;
      this.largura = 90;
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  
    mova() {
      image(this.imagem, this.posX, this.posY, this.altura, this.largura);
      //a condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.
  
      if (keyIsDown(39) && this.xFinal < 650) {
        this.posX += this.velocidade;
      }
      if (keyIsDown(37) && this.xInicial > 3) {
        this.posX -= this.velocidade;
      }
      this.yInicial = this.posY;
      this.yFinal = this.posY + this.altura;
      this.xInicial = this.posX;
      this.xFinal = this.posX + this.largura;
    }
  }