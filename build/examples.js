"use strict";
let age = 50;
let firstName = "Masai";
let bool;
bool = false;
bool = true;
let biginteger;
let list;
list = [1, 2, 3, 4, 5, 6];
console.log(list);
let stringList;
stringList = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
console.log(stringList);
let booleanList = [true, false,];
let tuple;
tuple = [1, "b"];
const key = {
    a: 1,
    b: 2,
};
let response = "webDevelopment";
function CheckResponse(value) {
    switch (value) {
        case "webDevelopment": {
            console.log('web is selected', value);
            break;
        }
        case "androidDevelopment": {
            console.log('android is selected', value);
            break;
        }
        default: {
            break;
        }
    }
}
CheckResponse(response);
let und;
let n;
let val;
var person;
person = {
    firstName: "Masai",
    lastName: "School",
    age: 10,
    phone: "+912123112312",
};
var coder = {
    firstName: "Raj",
    lastName: "Misra",
    age: 25,
    phone: "+912123112312",
    job: "software"
};
function sum(a, b) {
    console.log(a + b);
    return a + b;
}
const greet = (name) => {
    console.log(`Greetings ${name}`);
};
sum(10, 20);
greet("Masai");
function joinPerson(person) {
    if (person.lastName) {
        return `${person.firstName} ${person.lastName}`;
    }
    else {
        return `${person.firstName}`;
    }
}
var masai = {
    firstName: "Masai",
};
console.log(joinPerson(masai));
let jobs;
let text;
let reqLoading = {
    state: "loading"
};
let reqFail = {
    state: "failed",
    errorCode: 404
};
let reqSuccess = {
    state: "success",
    response: [
        { title: "LEARN TYPESCRIPT", status: false, id: 1 }
    ]
};
console.log(reqSuccess.response && reqSuccess.response[0] && reqSuccess.response[0].title);
let resp = {
    response: [{ username: "masai", email: "masai@gmail.com", id: 1, phone: "123", age: 10 }],
    status: 200
};
let resp2 = {
    response: null,
    status: 401,
    error: {
        message: "Unauthorized"
    }
};
class Tree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const elem = new Tree(1);
console.log(elem);
