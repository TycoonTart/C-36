class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
    update1(State){
        database.ref('/').update({gameState:State})

    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount()
            form=new Form();
            form.display()
        }
    }
}