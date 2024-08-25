function sum(n1:number,n2:number):number
{
    return n1+n2;
}

console.log(sum(3,7));

type Gender="male"|"female";

type Student={
    id:number,
    name:string,
    age:number,
    gender:Gender,
    hobby?:string
}

var st:Student={
    id:1,
    name:"Mohamed",
    age:21,
    gender:"male",
}

console.log(st)


class Shape{
    protected l1:number;
    protected l2:number;
    constructor(){
        this.l1=0;
        this.l2=0;
        console.log("Shape constructor called");
    }
}

class Square extends Shape{
    constructor(l1:number,l2:number){
        super();
        this.l1=l1;
        this.l2=l2;
    }
    area():number{
        return this.l1*this.l2;
    }
}

var sq=new Square(5,5);

console.log(sq.area())