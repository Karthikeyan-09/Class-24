class Log {
    constructor (x,y,height,angle) {
        var options = {
            restitution : 0.1,
            friction : 1,
            density : 1
        }
        this.box = Bodies.rectangle(x,y,20,height, options);
        World.add(world,this.box);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle (this.box, angle);

    }

    display () {
        var pos = this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("brown");
        rectMode(CENTER);
        rect(0,0,20,this.height);
        pop();
    }
}