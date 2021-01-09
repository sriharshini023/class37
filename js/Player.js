class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

 /* getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }*/

  getCount(){
    database.ref('playerCount').on("value", (data)=> playerCount = data.val());
  }

  updateCount(c){

    database.ref('/').update({
      playerCount : c
    })
  }
          

  update(){
    var playerIndex = "players/player" + this.index;  //players/player1
    database.ref(playerIndex).update({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){ // this is a static fun going to call with class name
    //var playerInfoRef = database.ref('players');
    database.ref('players').on("value",(data)=>{
      allPlayers = data.val();
      console.log(allPlayers)
    })
  }
}
