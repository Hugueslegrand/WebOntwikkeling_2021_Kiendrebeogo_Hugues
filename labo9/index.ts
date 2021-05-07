const express = require('express');
const app = express();
const ejs = require('ejs');
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('port', 3000);

const movies = [
        {name: "The Matrix", myScore: 90},
        {name: "Pulp Fuction", myScore: 100},
        {name: "Monster Hunter", myScore: 5},
        {name: "Blade Runner", myScore: 100}
];
/* app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World');
}); */
app.get('/', (req: any, res: any) => {

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
    let data = req.body;
    res.json(data);
})
app.listen(app.get('port'),
    () => console.log('[server] http://localhost:' + app.get('port')));