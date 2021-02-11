class hammer{
constructor(x, y,){
    var options = {
        'density' : 2,
        'restitution' : 0.5,
        'friction' : 1.0
    }
    this.body = Bodies.rectangle(x,y,500,50,options)
    World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    pos.x = mouseX
    pos.y = mouseY
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(2)
    stroke("white")
    fill("gold")
    rect(0,0,150,30);
    pop();
}
}