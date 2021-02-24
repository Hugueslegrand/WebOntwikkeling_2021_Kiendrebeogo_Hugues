let fizzBuzz: Array<number> = [];

for (let i = 1; i <= 100; i++) {
    fizzBuzz[i]= i;

    if (fizzBuzz[i]%3 == 0 && fizzBuzz[i]%5 == 0) {
         console.log("FizzBuzz");
        
    }else if(fizzBuzz[i]%5 == 0){
        console.log("Buzz");

    }else if(fizzBuzz[i]%3 == 0){
       console.log("Fizz");

    }else
    console.log(fizzBuzz[i]);
}