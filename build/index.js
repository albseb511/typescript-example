"use strict";
let num = 50;
console.log(num);
let a = 100;
let b = "Masai";
let lastName;
lastName = "School";
const sleep = (delay) => new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
});
async function myFunc() {
    await sleep(500);
    console.log("waited for 500 ms");
    await sleep(1500);
    console.log("waited for 1500 ms");
}
myFunc();
