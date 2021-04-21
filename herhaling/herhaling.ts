const chalk = require('chalk');


interface ZoekGetal {
    (getallen: number[], getal: number): number
}

let getallen: number[] = [1, 3, 5, 7, 9, 13];
const zoekGetal: ZoekGetal = (getallen, getal) => {
    for (let i = 0; i < getallen.length; i++) {
        if (getallen[i] === getal) {
            return i;
        }
    }
    return -1;
}
console.log(zoekGetal(getallen, 3));



interface Person {
    name: String,
    age: number;
}
interface zoekPersonenMetLeeftijd {
    (personen: Person[], leeftijd: number): Person[]
}

interface PrintAllePersonen {
    /*(personen: Person[]): void*/
    (personen: Person[],PrintPersoon:PrintPersoon): void
}

interface PrintPersoon {
    (persoon: Person): void
}

let personen: Person[] = [
    {
        name: 'Andie', age: 36
    },
    {
        name: 'Donald', age: 76
    },
    {
        name: 'Joe', age: 78
    },
    {
        name: 'Bompa', age: 75
    },
]

const zoekPersonenMetLeeftijd: zoekPersonenMetLeeftijd = (personen, leeftijd) => {
    let personenMetLeefTijd = [];

    for (let index = 0; index < personen.length; index++) {
        if (personen[index].age === leeftijd) {
            personenMetLeefTijd.push(personen[index]);
        }
    }
    return personenMetLeefTijd;
}
console.log(zoekPersonenMetLeeftijd(personen, 36));

const printNaamDanLeeftijd: PrintPersoon = (persoon) => {
    console.log('${personen.name} ${personen.age}');
}
const printLeeftijdDanNaam: PrintPersoon = (persoon) => {
    console.log('${personen.age} ${personen.name}');
}

const printMetKleur: PrintPersoon = (persoon) => {
    for (let index = 0; index < personen.length; index++) {
        if (personen[index].age > 70) {
            console.log('${personen.name} ${chalk.red(personen.age)}');

        }
        console.log('${personen.name} ${personen.age}');
    }
}

const PrintAllePersonen: PrintAllePersonen = (personen, printPersoon) => {
    for (let index = 0; index < personen.length; index++) {
        printPersoon(personen[index]);
    }
}

/*const PrintAllePersonen2: PrintAllePersonen = (personen) => {
    for (let index = 0; index < personen.length; index++) {
        printLeeftijdDanNaam(personen[index]);
    }
}
const PrintAllePersonen3: PrintAllePersonen = (personen) => {
    for (let index = 0; index < personen.length; index++) {
            printMetKleur(personen[index]);
    }
}*/

PrintAllePersonen(personen,(persoon)=>{
    console.log('${chalk.green(persoon.name)}${chalk.red(persoon.age)}');
});

console.log(PrintAllePersonen(personen,printNaamDanLeeftijd));
console.log(PrintAllePersonen(personen,printLeeftijdDanNaam));
console.log(PrintAllePersonen(personen,printMetKleur));

export { }
