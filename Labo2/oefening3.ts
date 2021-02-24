let veelvouden: Array<number> = [];

for (let i = 0; i <= 10; i++) {
   veelvouden[i]= i*7;
    if ((veelvouden[i] %5 == 0 || veelvouden[i] %3 == 0) 
    &&
    !(veelvouden[i] %5 == 0 && veelvouden[i] %3 == 0) ) {
        console.log(veelvouden[i]);
    }
    
}

for (let i = 0; i <= 10; i++) {
    veelvouden[i]= i*7;

    console.log((veelvouden[i] %5 == 0 || veelvouden[i] %3 == 0) 
    &&
    !(veelvouden[i] %5 == 0 && veelvouden[i] %3 == 0)?veelvouden[i]:"")
}