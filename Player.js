class Player {
    constructor() {
        this.index = null
       this.score=0
    }

//is for 




    //to get the number of players
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function (data) {
            playerCount = data.val();
        })
    }


    // to update the numbers of players
     updateCount(count){
      database.ref('/').update({
          playerCount:count

       })

     }


    // to create the player by defualt

   updatePlayer(){
   var playerIndex= "players/player" + this.index;
   database.ref(playerIndex).set({
    name:this.name,
     score:this.score
  });
   }



    // to display all the players info, is going to be static because it is not changed
    static getPlayerInfo(){
        var playerInfoRef= database.ref('players')
    playerInfoRef.on("value",(data)=>{
      allPlayer= data.val()
    })
  }
    }


