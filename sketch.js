var canvas;
var gameState=0
var playerCount,database, quiz, question,player
var game,allPlayer


function setup(){
  canvas = createCanvas(900,600);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  
  
  if(playerCount===4){
    game.update(1)

  }
  if(gameState===1){
    background("pink")
    //clear()
    game.play()
}
if(gameState===2){
  background("yellow")
  game.end()
  
}

}
