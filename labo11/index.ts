const express = require('express');
const app = express();
const ejs = require('ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.set('view engine', 'ejs');
app.set('port', 3000);

const { MongoClient } = require('mongodb');

const uri =
    "mongodb+srv://Hugues:APHogeschool@cluster0.c6h6v.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


/* app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World');
}); */
interface MOVIES {
    name: string,
    myScore: number,
    timesViewed: number
}
const movies = [
   {
       
   }
];

const callDB = async () => {
    try {
        await client.connect();
        //Data uit de database in de array movies steken
        let cursor = await client.db('WebOntwikkeling').collection('Movies').find({});
        let AllMovies: MOVIES[] = await cursor.toArray();
        for (let index = 0; index < AllMovies.length; index++) {
            movies[index] = AllMovies[index];
        }

    }
    catch (exc) {
        console.log(exc);
    }
    finally {
        await client.close();
    }
}

app.get('/', (req: any, res: any) => {
    callDB();
    res.render('landingPage');
});
app.get('/movies', (req: any, res: any) => {
    
    res.render('movies',{movies});
});
app.get('/movies/:index',(req:any,res:any)=>{
    let index = req.params.index;
   
    res.render('movie',movies[index]);
})
app.get('/addmovie',(req:any,res:any)=>{

    res.render('addMovie');
})
app.post('/addmovie',(req:any,res:any)=>{
    movies.push({name: req.body.name, myScore: req.body.myScore});
    res.render('addMovie');
   
})
app.listen(app.get('port'),
    () => console.log('[server] http://localhost:' + app.get('port')));