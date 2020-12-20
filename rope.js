class Chain{
    constructor(bodyBob,bodyRoof,offsetRoofX,offsetRoofY){
        this.offsetX=offsetRoofX;
        this.offsetY=offsetRoofY;
        var option={
            bodyA:bodyBob,
            bodyB:bodyRoof,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffnes:0.04,
            length:250
        }
        this.rope=Constraint.create(option);
        World.add(world,this.rope);
    }
   display(){
       push();
       var pointA=this.rope.bodyA.position;
       var pointB=this.rope.bodyB.position;
       strokeWeight(4)
       line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
       pop();
   } 
}