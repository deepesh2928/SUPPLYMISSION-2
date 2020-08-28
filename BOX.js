class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      var options_1 = {
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options_1,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill(255);
      rect(0,0,this.width,this.height);
    }
  };