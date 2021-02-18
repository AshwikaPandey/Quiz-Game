class Quiz {
constructor(){
   
}
getState(){
 var gameStateRef= database.ref('gameState')
  gameStateRef.on("value",function(data){
      gameState= data.val()
  })
}
update(state){
database.ref('/').update({
    gameState:state

})
//is for the gameState
}
async start(){
    if(gameState===0){
        //autumatocally creates player
        player= new Player()
        // waits to get databasa variable 
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists){
            //stores the value
            playerCount = playerCountRef.val();
            player.getCount();
        }
        question= new Question()
        question.display()
    } 
    }

    play(){
        
       
        Player.getPlayerInfo();
         
        
        question.display()
        
} 
end(){
    background("yellow")
     
    if(allPlayer !== undefined){
      var display_position = 400;
      
      for(var plr in allPlayer){
        if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");
  
        display_position+=20;
        textSize(15);
        text(allPlayer[plr].name ,display_position)
        text(allPlayer[plr].name + ": " + allPlayer[plr].score, 300,display_position)
      }
      
    } 
    
  }

}