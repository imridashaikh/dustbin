class Paper {
    constructor(x,y,r){
        var options = {isStatic:false,
            restitution:0.3,
            friction:0.5,
        density:1.2}
  this.x=x;
  this.y=y;
  this.r=r;
  this.body=bodies.circle(this.x,this.y,this.r/2,options)
  World.add(world,this.body);
  
  
    }
display(){

var Paperpos= this.body.position;

push()
translate(Paperpos.x,paperpos.y);
rectMode(CENTER)
strokeweight(3);
fill(255,0,255)
eliipse(0,0,this.r,this.r);
pop()


}








}