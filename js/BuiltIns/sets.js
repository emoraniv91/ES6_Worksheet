const months = new Set(['January', 'February', 'March']);

const iterator = months.values();

console.log(iterator);  // SetIterator {"January", "February", "March"}
console.log(iterator.next()); // {value: "January", done: false}
console.log(iterator.next()); // {value: "February", done: false}


for (let month of months) {
    console.log(month); //January, February, March
}

const myFavoriteFlavors = new Set();

myFavoriteFlavors.add("chocolate chip").add("cookies and cream").add("strawberry").add("vanilla");
console.log(myFavoriteFlavors.values());

myFavoriteFlavors.delete("strawberry");
console.log(myFavoriteFlavors.values());


const uniqueFlavors = new WeakSet();
const flavor1 = {flavor : 'chocolate'};
const flavor2 = {flavor : 'strawberry'};

uniqueFlavors.add(flavor1).add(flavor2);
console.log(uniqueFlavors.values);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors.values);