let items: Array<number> = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

const search = (items: number[], nummer: number) =>{
    return items.indexOf(nummer);
}

console.log(search(items, 5));