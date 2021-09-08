/* All these are viable syntax for declaring a generator method:
function* names() {};
function * names() {};
function *names() {};
*/

// Using the 'yield' keyword to pause and return data outside of a generator
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name; // Pauses the generator and 'yields' the value 'name' to the 'outside'
    }
    console.log('the function has ended');
}

const generatorIterator = getEmployee();
let result = generatorIterator.next();

console.log(result.value); // This does the same thing as the next line
console.log(generatorIterator.next().value);

// Using the .next() method to pass data inside of a generator
function* getEmployee2() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        facts.push(yield name);
    }

    return facts;
}

const generatorIterator2 = getEmployee2();

// Get the first name out of the generator
let name = generatorIterator2.next().value;

// Pass data in *and* get the next name
name = generatorIterator2.next(`${name} is cool!`).value;

// Pass data in *and* get the next name
name = generatorIterator2.next(`${name} is awesome!`).value;

// Pass data in *and* get the next name
name = generatorIterator2.next(`${name} is stupendous!`).value;

// You get the idea
name = generatorIterator2.next(`${name} is rad!`).value;
name = generatorIterator2.next(`${name} is impressive!`).value;
name = generatorIterator2.next(`${name} is stunning!`).value;
name = generatorIterator2.next(`${name} is awe-inspiring!`).value;

// Pass the last data in, generator ends and returns the array
const positions = generatorIterator2.next(`${name} is magnificient!`).value;

// Displays each name with description on its own line
console.log(positions.join('\n'));
