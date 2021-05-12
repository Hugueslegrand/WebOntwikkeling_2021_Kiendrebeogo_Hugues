const { MongoClient } = require('mongodb');

const uri =
    "mongodb+srv://Hugues:APHogeschool@cluster0.c6h6v.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });

interface MOVIES {
    name: string,
    myScore: number,
    timesViewed: number
}

/* let movies : MOVIES[]= [
    {name: "The Matrix", myScore: 90, timesViewed: 10},
    {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
    {name: "Monster Hunter", myScore: 5, timesViewed:1},
    {name: "Blade Runner", myScore: 100, timesViewed:30},
    {name: "Austin Powers", myScore: 80, timesViewed:10},
    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
]; */
const callDB = async () => {
    try {
        await client.connect();
        let list = await client.db().admin().listDatabases();
/*         await client.db('WebOntwikkeling').collection('Movies').insertMany(movies);
 */      let firstMovie: MOVIES = await client.db('WebOntwikkeling').collection('Movies').findOne({});
        console.log(firstMovie);

        //toon een lijst van alle scores van alle films
        let cursor = await client.db('WebOntwikkeling').collection('Movies').find({});
        let AllMovies: MOVIES[] = await cursor.toArray();
        for (let index = 0; index < AllMovies.length; index++) {
            console.log(`Score van ${AllMovies[index].name} is ${AllMovies[index].myScore}`);
        }
        //een totaal van het aantal keren dat deze films
        //bekeken zijn (dus de som van alle timesViewed)
        let sumTimesViewed = 0;
        for (let index = 0; index < AllMovies.length; index++) {
            sumTimesViewed += AllMovies[index].timesViewed;
        }
        console.log(`Totaal van het aantal keren dat de films bekeken zijn is ${sumTimesViewed}`);

        //Toon een lijst van alle films met een score tussen 30 en 85
        let cursor2 = await client.db('WebOntwikkeling').collection('Movies').find({ myScore: { $gt: 30, $lt: 85 } });
        let AllMoviesWithDelimiter: MOVIES[] = await cursor2.toArray();
        console.log(AllMoviesWithDelimiter);

        //Toon een lijst van alle films met een 
        //score tussen 30 en 85 OF die maar 1 keer bekeken zijn.
        let cursor3 = await client.db('WebOntwikkeling').collection('Movies').find({$or:[{myScore: { $gt: 30, $lt: 85}}, {timesViewed:1}]});
        let AllMoviesWithDelimiter2: MOVIES[] = await cursor3.toArray();
        console.log(AllMoviesWithDelimiter2)
    }
    catch (exc) {
        console.log(exc);
    }
    finally {
        await client.close();
    }
}
callDB();
