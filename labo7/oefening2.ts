const fetch1 = require('node-fetch');
let promise1 = fetch1('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((response:any) => response.json());
let promise2 = fetch1('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((response:any) => response.json());
let promise3 = fetch1('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((response:any) => response.json());
Promise.all([promise1,promise2,promise3]).then(
(coctail) => {
console.log(coctail[0].drinks[0].strDrink, coctail[1].drinks[0].strDrink, coctail[2].drinks[0].strDrink );
}
);


