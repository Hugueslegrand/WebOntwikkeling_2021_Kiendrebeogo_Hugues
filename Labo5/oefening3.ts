interface Calculation {(a:number, b:number):number}

const printCalculationResult = (a:number,b:number,func:Calculation)=>{
    if (func==add) {
        console.log(add(a,b));
    }else 
    console.log(mult(a,b));
   
}

const mult = (a:number,b:number)=> a*b;
const add = (a:number,b:number)=> a+b;
const devide= (a:number,b:number)=> {
    if (b===0) {
    return  -1 ;
    }
    else
    {
    return a/b;}

};

printCalculationResult(2,4,add);
printCalculationResult(2,4,mult);