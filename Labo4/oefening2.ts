
/*oefening 2a: Interfaces*/
interface Movie { 
    title: string,
    year: number,
    actors: string[],
    metascore: number,
    seen: boolean
};

const thematrix :Movie= {
        title: "The Matrix",
        year: 1999,
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        metascore: 73,
        seen: true
};

const myfavoritemovie :Movie = {
        title: "Requiem for a Dream",
        year: 2000,
        actors: ["Ellen Butstyn", "Jared Leto", "Jennifer Connelly", "Marlon Wayans"],
        metascore: 68,
        seen: true
};

const myworstmovie :Movie = {
    title: "The Last Airbender",
    year: 2010,
    actors: ["Noah Ringer", "Nicola Peltz", "Dev Patel", "Jackson Rathbone", "Shaun Toub"],
    metascore: 20,
    seen: true
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
    let average: number = ((thematrix.metascore + myfavoritemovie.metascore + myworstmovie.metascore)/3);
    return average;
}
console.log(averageMetaScore([myworstmovie,thematrix,myfavoritemovie]));

const fakeMetaScore =(movies:Movie):number =>{
    return movies.metascore = 34;
}
console.log("New metascore = "+fakeMetaScore(myfavoritemovie));