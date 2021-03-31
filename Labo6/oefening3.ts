interface Pokemon {
    name: string
    xp: number
    type: string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 : Pokemon[]  = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];

//Spread

let starters: Pokemon[] = [...starterPokemonGen1,...starterPokemonGen2];
console.log(starters);

//Map

let names = starters.map(e=>
    console.log(e.name));



//Filter

let weakPokemon = starters.filter(e=> console.log(e.xp<40));

//Combineren (Map+Filter)

let weakPokemonNames = starters.filter(e=>e.xp<40).map(e=>console.log(e.name));

//Reduce

let sumOfAllXp = starters.reduce(
    (som,e) => {
        som.sum += e.xp;
        return som;
        }, {sum:0}
    );
console.log(sumOfAllXp);


let strongestPokemon = starters.reduce(
    (maximum,e) => 
    maximum = maximum > e.xp ? maximum : e.xp ,0);
console.log(strongestPokemon);

//Combineren (Reduce + Filter )

let sumOfAllXpOfWeakPokemon= starters.filter(e=> e.xp<40).
reduce(
    (som,e) => {
        som.sum += e.xp;
        return som;
        }, {sum:0}
    );
console.log(sumOfAllXpOfWeakPokemon);

//Sorteren

let sortedStarters = starters.sort((a:Pokemon,b:Pokemon)=> (a.xp>b.xp)?1:-1);
console.log(sortedStarters)