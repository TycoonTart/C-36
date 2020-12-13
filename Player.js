class Player{
    constructor(){
    }
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
    updateName(name){
        var nodeName="player"+playerCount
        database.ref(nodeName).set({name:name})
    }
  getCount(){
    var playerCount2Ref=database.ref('playerCount');
    playerCount2Ref.on('value',function(data){
        playerCount=data.val()
    }) 
  }  
}