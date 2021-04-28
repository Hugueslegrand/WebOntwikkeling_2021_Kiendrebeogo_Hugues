const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch1 = require('node-fetch');

app.set('view engine', 'ejs');
app.set('port', 3000);


let pikachu = {};
let pikachuPromise = fetch1('https://pokeapi.co/api/v2/pokemon/pikachu').then((response: any) => response.json())
    .then((json: any) => {
        pikachu = json;
    });

/* let pikachu2 = '';

const doFetch = async (): Promise<void> => {
    let pikachu = await fetch1(`https://pokeapi.co/api/v2/pokemon/pikachu`);

    pikachu2 = await pikachu.json();
}
doFetch */


const thisisme =
{
    name: 'Hugues',
    age: 25,
    profilepic: `https://scontent-bru2-1.xx.fbcdn.net/v/t1.6435-9/67539739_2412892925399406_6333425797646254080_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4cTruBf6Z7YAX9bYEHp&_nc_ht=scontent-bru2-1.xx&oh=facc6a3d1e0a4a708584e6dfa82c0a50&oe=60AD673A`
};

app.get('/', (req: any, res: any) => {

    res.render('index');
});
app.get('/whoami', (req: any, res: any) => {

    res.render('whoami', thisisme);

});
app.get('/whoamijson', (req: any, res: any) => {
    res.type('application/json');
    res.json(thisisme);
});
app.get('/pikachujson', (req: any, res: any) => {
    res.type('application/json');
    res.json(pikachu);
});
app.get('/pikachuhtml', (req: any, res: any) => {
    res.render('pikachu', pikachu);
});

app.listen(app.get('port'),
    () => console.log('[server] http://localhost:' + app.get('port')));