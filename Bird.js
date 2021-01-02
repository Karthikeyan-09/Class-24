class Bird {
    constructor (x,y) {
        var options = {
            restitution : 0.5
        }
        this.box = Bodies.rectangle(x,y,50,50, options);
        World.add(world,this.box);
        this.width = 50;
        this.height = 50;
    }

    display () {
        var pos = this.box.position;
        var angle = this.box.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("green")
        fill("red");
        rectMode(CENTER);
        rect(0,0,50,50);
        pop();
    }
}