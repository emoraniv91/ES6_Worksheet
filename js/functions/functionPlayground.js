// const upperizedNames = ['Hans', 'EunuchH0rn', 'Guthin'].map(
    // function(name){return name.toUpperCase();});


const upperizedNames = ['Hans', 'EnuchH0rn', 'Guthin'].map(name => name.toUpperCase());

console.log(upperizedNames);

const names = ['Afghanistan', 'Aruba', 'Bahamas', 
               'Chile', 'Fiji', 'Gabon', 'Luxembourg', 
               'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
  return name.length > 6;
});

const greet = (name1, name2) => `Hello, ${name1} and ${name2}`;
console.log(greet('Edmund', 'Sam'));

function makeMultiplier(multiplier) {
    function b() {
      console.log("Multiplier is " + multiplier);
    };
    b();
    return (
      function (x) {
        return multiplier * x;
      }
    );
  };
  var doubleAll = makeMultiplier(2);
  console.log(doubleAll(10));


class Vehicle {
  constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }

  honkHorn() {
    console.log(this.horn);
  }
}

// your code goes here
class Bicycle extends Vehicle  {
    constructor (color, wheels = 2, horn = 'honk honk') {
        super(color, wheels, horn);
    }
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk