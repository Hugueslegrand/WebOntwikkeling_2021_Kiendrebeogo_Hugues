interface Print{
    (amount:number, text:string):void
}
const printStuff : Print = (amount, text) => console.log(`Hello ${text}, you are number ${amount}`);

interface TwoArray{
    (element1:string, element2: string): string[]
}
const twoDArray:TwoArray = (element1, element2) => [element1, element2];

interface NumberToStrng{
    (number: number): string
}
const numberToString: NumberToStrng= (number) => `${number}`;
