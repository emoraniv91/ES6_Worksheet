// A Pass Through Proxy
var richard = {status: 'looking for work'};
var agent1 = new Proxy(richard, {});

console.log(agent1.status); // returns 'looking for work'


// The Get Trap
const elroy = {status: 'looking for work'};
const handler2 = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent2`
        console.log(propName); // the name of the property the proxy 
                               //(`agent2` in this case) is checking
        return target[propName]; // This return must be used if you want to directly
                                 // access the property of the target object and return it
    }
};
const agent2 = new Proxy(elroy, handler2);
agent2.status; // logs out the richard object (not the agent2 object!) and 
              //the name of the property being accessed (`status`)





const steven = {status: 'looking for work'};
const handler3 = {
    set (target, propName, value) {
        if (propName === 'payRate') {
            value = value * 0.85;
        }
        target[propName] = value;
    }
};

const agent3 = new Proxy (steven, handler3);
agent3.payRate = 1000; // set the actor's pay to $1,000
console.log(agent3.payRate); // $850 is the actor's actual pay

console.log(steven);
console.log(agent3);


var obj = {
    _age: 30,
    _height: 6, 
    get age () {
        console.log('Getting the "age" property... ');
        console.log(this._age);
    },
    get height () {
        console.log('Getting the "height" property... ');
        console.log(this._height);
    }
};

obj.age; // logs 'getting the "age" property...' & '30'
obj.height; // logs 'getting the "height" property...' and '6'

obj.weight = 283; // creates a new property 'weight' with a value of '283'
console.log(obj.weight); // logs the value of the 'weight' property


const proxyObj = new Proxy ({age: 30, height: 6}, {
    get (targetObj, property) {
        console.log(`Getting the ${property} property...`);
        console.log(`${property}: ${targetObj[property]}`)
    }
});

proxyObj.age; // logs 'getting the age property...' & 'age: 30'
proxyObj.height; // logs 'getting the height property...' & 'height: 6'

proxyObj.weight = 283; // creates a new 'weight' property with a value of '283'
proxyObj.weight; // logs 'getting the "weight" property...' & 'weight: 283'