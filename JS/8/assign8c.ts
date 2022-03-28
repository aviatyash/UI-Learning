function printDate(date:string):void{
}
printDate(new Date())
printDate('15/3/2022');
printDate(1532022);
printDate({});

function printDateagain(date:number):void{
}
printDateagain('15/3/2022')
printDateagain(1532022);

function printDateUnion(date:string | number | Date):void{
    printDateUnion(new Date())
    printDateUnion('15/3/2022');
    printDateUnion(1532022);  
}


type emp={
    name:string;
    age:number;
};
type empdept={
    deptname:string;
    
};
type empIntersection=emp & empdept;

let employee:empIntersection={
    age:30,
    name:'John',
    deptname:"UI",
};
