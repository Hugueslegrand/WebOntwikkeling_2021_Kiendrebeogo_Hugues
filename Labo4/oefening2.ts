import { Interface } from "node:readline";

/*oefening 2a: Interfaces*/
interface Movie { 
    title: string,
    year: number,
    actors: string[],
    metascore: number,
    seen: boolean,
    imdb: number
};

const thematrix :Movie= {
        title: "The Matrix",
        year: 1999,
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        metascore: 73,
        seen: true,
        imdb: 45
};

const myfavoritemovie :Movie = {
        title: "Requiem for a Dream",
        year: 2000,
        actors: ["Ellen Butstyn", "Jared Leto", "Jennifer Connelly", "Marlon Wayans"],
        metascore: 68,
        seen: true,
        imdb: 45
        
};

const myworstmovie :Movie = {
    title: "The Last Airbender",
    year: 2010,
    actors: ["Noah Ringer", "Nicola Peltz", "Dev Patel", "Jackson Rathbone", "Shaun Toub"],
    metascore: 20,
    seen: true,
    imdb: 45
};

console.log(thematrix.actors);

/*Oefening 2b: Functions*/

const wasMovieMadeInThe90s = (movie:Movie):boolean=>{
    if (movie.year <2000) {
        return true;
    }else {
        return false;
    }
};

console.log(wasMovieMadeInThe90s(thematrix));
console.log(wasMovieMadeInThe90s(myfavoritemovie));

const averageMetaScore =(movies:Movie[]):number =>{
    let total: number=0;
    for (let index = 0; index < movies.length; index++) {
        total= total+movies[index].metascore;  
    }
    return total/movies.length;
}
console.log(averageMetaScore([myworstmovie,thematrix,myfavoritemovie]));

const fakeMetaScore =(movies:Movie):number =>{
    return movies.metascore = 34;
}
console.log("New metascore = "+fakeMetaScore(myfavoritemovie));

/* Oefening 2c: Functions*/

interface wasMovieMadeInThe90sInterface{
    (movie:Movie):boolean;
}

interface averageMetaScoreInterface{
    (movies:Movie[]):number;
}

interface fakeMetaScoreInterface{
    (movies:Movie):number;
}