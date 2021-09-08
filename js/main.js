const point = [10, 25, 50];

const [a, b, c] = point;

console.log(a, b,c );

let wep = "blowpipe";
let pray = false;
let activePrayer = "Protect from Missles";
let lastPotion = "Saradomin Brew";

// const {wep, pray, activePrayer, lastPotion} = jadGear;

let jadGear = {wep, pray, activePrayer, lastPotion, 
                checkPray(pray, activePrayer) {
                    if (pray) {
                        return `is praying using ${activePrayer}`;
                    } else {
                        return `is not praying any overhead`;
                    }
                }
};

console.log(jadGear);

let currentPlayerGear = `Player is fighting with a ${wep} and ${jadGear.checkPray(pray, activePrayer)}. 
The last potion drank was a ${lastPotion}.`;

console.log(currentPlayerGear);