class Form{
    constructor(){

    }
    display(){
        var Title=createElement('h2')
        Title.html("Asphalt")
        Title.position(150,20)
        var textBox=createInput("name");
        var button=createButton("Play");
        var text1=createElement('h3');
        textBox.position(200,100)
        button.position(300,150)
        button.mousePressed(function(){
            textBox.hide()
            button.hide()
            var name=textBox.value();
            playerCount++;
            player.updateName(name)
            player.updateCount(playerCount)
            text1.html("hello "+name)
            text1.position(200,100)
            
        })

    }
}