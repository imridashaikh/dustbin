class Dustbin{
    constructor(x,y,width,height){

    this.width=width
    this.height=height

    var options = {isStatic:false} 
    this.bodyrect=bodies.rectangle(this.x,this.y,width,height,options)
    World.add(world,this.bodyrect);

   
    }

    display(){

        var Dustbinpos= this.bodyrect.position;
        
        push()
        translate(Dustbinpos.x,Dustbinpos.y);
        rectMode(CENTER)
        strokeweight(3);
        fill(255,0,255)
        pop()


}



}
    