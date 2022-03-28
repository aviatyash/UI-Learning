export class Addition{
    constructor(private x?:number,private y?:number){

    }
    sum(){
        console.log("SUM:"+(this.x+this.y));
    }
}
export class Substraction{
    constructor(private a?:number,private b?:number){

    }
    sub(){
        console.log("SUB:"+(this.a-this.b));
    }
}