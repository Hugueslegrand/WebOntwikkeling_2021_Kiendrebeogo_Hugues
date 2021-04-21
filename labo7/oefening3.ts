const fetch2 = require('node-fetch');
const dadJokes = async () => {
    for (let i = 1; i <=3; i++) {
        let jokes = await fetch2(`https://icanhazdadjoke.com/search?term=dog&limit=5&page=${i}`, {
            headers: {
                'Accept': 'application/json'
            }
        });
        let jokesJson = await jokes.json();
           for (let index = 0; index < jokesJson.results.length; index++) {
            console.log(jokesJson.results[index].joke)    
            }
 }
};
dadJokes();