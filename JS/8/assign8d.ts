interface employee{
    name:string;
    dept:string;
    dob:number;
}
function addemployee(name:string,dept:string,dob:number):
employee{
    let data:Partial<employee>={};
    data.name=name;
    data.dept=dept;
    data.dob=dob;
    return  <employee>data;
}




const emp1:Required<employee>={name:'Avi',
dept:"UI"}





let names : Readonly<string[]>=['John','Jacob']
names.push('elton')


