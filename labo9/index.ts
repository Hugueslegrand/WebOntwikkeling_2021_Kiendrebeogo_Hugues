const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('port', 3000);

app.get('/',(req:any,res:any)=>{
    res.type('text/html');
    res.send('Hello World');
});

app.listen(app.get('port'),
    () => console.log('[server] http://localhost:' + app.get('port')));