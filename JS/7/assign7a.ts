class shape{
    num1:any;
    num2:any;
    constructor(x:Number,y:Number){
        this.num1=x;
        this.num2=y;
    }
    rectangleArea(){
        return this.num1*this.num2;
    }
    circleArea(){
        return Math.PI*this.num1*this.num2;
    }
}
class Rectangle extends shape{
    constructor(length:number, width:number){
        super(length,width);
    }
}
class circle extends shape{
    constructor(radius:Number){
        super(radius,radius);
    }
}
var val1=new Rectangle(10,10);
console.log(val1)
var val2=new circle(10);
console.log(val2)