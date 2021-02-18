class Question {
  constructor() {
    this.input = createInput("Name")
    this.button = createButton('Play')
   
    this.question1 = createElement('h3')
    this.option1 = createButton("The President")
    this.option2 = createButton("The Whiteman")
    this.option3= createElement()
    this.option4= createElement()
    this.results= createElement('h2')
    //is like form.js
    this.greeting= createElement('h2')
    
    

  }
  hide() {
    this.input.hide()
    this.button.hide()
    this.option1.hide()
    this.option2.hide()
  this.greeting.hide()
  }
  
  display() {
    if (gameState === 0) {
      this.input.position(130, 160);
      this.button.position(250, 200)
      this.button.mousePressed(() => {
        this.input.hide();
        this.button.hide();
        
        player.name = this.input.value();

        playerCount += 1;
        player.index = playerCount
        player.updatePlayer()
        player.updateCount(playerCount);

        player.updatePlayer()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
     this.greeting.position(130, 160)
      });

    }

    if (gameState === 1) {
      this.option1.position(300, 100)
      this.option2.position(300, 200)
      this.question1.html("Red lives in the red house,blue in the blue house"+ 
      "black in the black house. Who lives in the WhiteHouse?")
      this.question1.position(50, 50)
      this.greeting.hide()
        
        this.option1.mousePressed(() => {
        this.option1.hide();
        this.option2.hide();
        fill("blue")
        this.option3.html("Good Job")
        this.option3.position(300,200)
        this.results.html("RESULTS")
        this.results.position(300,150)
        gameState=2
        player.score= player.score+4
        player.updatePlayer()
        
       });
       this.option2.mousePressed(() => {
        this.option1.hide();
        this.question1.hide()
        this.option2.hide();
        this.option4.html("WRONG")
        this.option4.position(300,200)
        this.results.html("RESULTS")
        this.results.position(300,150)
        
        gameState=2
        
        player.score= player.score-4
        player.updatePlayer()
       });
      
      }
      
  }
  
}
