// * implicit
let num = 50;

console.log(num);

// * NUMBER

// * explicit
let a : number = 100;
let b: string = "Masai";

// * definition
let lastName : string;
lastName = "School";

const sleep = (delay: number) => new Promise((resolve, reject) => {
    setTimeout( resolve, delay )
})

async function myFunc(){
    await sleep(500);
    console.log("waited for 500 ms")

    await sleep(1500);
    console.log("waited for 1500 ms")
}

myFunc()