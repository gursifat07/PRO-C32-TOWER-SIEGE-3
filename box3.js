class Box3 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility=255

      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<7){
        this.pos=this.body.position;
       push();
       translate(this.pos.x,this.pos.y)
       rectMode(CENTER);
       fill( 127, 127, 127);
       rect(0, 0, this.width, this.height);
       pop();
   }
   else{
       World.remove(world,this.body);
       push();
       tint(255,this.visibility);
       this.visibility=this.visibility-5;
       pop();
   }
  }
  score() {
      if(this.visibility < 0 && this.visibility > -105){
          score = score + 1;


        }
  }
  };
  