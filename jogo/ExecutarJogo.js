function executarJogo(){
  background(imgfundo);
  jogador.mova();

  //let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão na qual ela é usada.
  for (let i = 0; i < objetos.length; i++) {
    objetos[i].mova();
    if (objetos[i].posX > 600) {
      objetos[i] = new Objetos(objetos[i].posY);
    }
    
    if (jogador.xInicial < objetos[i].xFinal &&
        jogador.xFinal > objetos[i].xInicial &&
        jogador.yInicial < objetos[i].yFinal &&
        jogador.yFinal > objetos[i].yInicial){
     
        if (objetos[i].imagem == imgObjetos[3]){
          objetos[i] = new Objetos(objetos[i].posX);
          contador = 0;
          somBomba.play();
     
        } else {
            objetos[i] = new Objetos();
            objetos[i].velocidade += 1;
            contador ++;
          somObjetos.play();
      }
    }
    textSize(13);
    text("Pontos: " + contador, 32, 45);
  }
}
