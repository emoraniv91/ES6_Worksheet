const sym1 = Symbol('apple');
console.log(sym1); // Outputs Symbol(apple)


const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
  };
  console.log(bowl); // Outputs object with three properties. Banana is overwritten with the 2nd instance of banana.



  const bowl2 = {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
  };
  console.log(bowl2); // Outputs object with 4 properties.


let digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let digit of digits) {
  console.log(digit);
}

digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next()); // {value: 0, done: false}
console.log(arrayIterator.next()); // {value: 0, done: false}
console.log(arrayIterator.next()); // {value: 1, done: false}


const games = new Set(); // Creates an empty Set games with no items
console.log(games);

const myGames = new Set(['Super Mario Bros', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros']);
console.log(myGames); // Outputs: Set {'Super Mario Bros', 'Banjo-Kazooie', 'Mario Kart'}


const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games); // Outputs: Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}