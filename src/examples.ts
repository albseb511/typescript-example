// * numbers
let age : number = 50;

// * string
let firstName : string = "Masai";

// * boloeans
let bool : boolean;
bool = false;
bool = true;

// * BigInteger
let biginteger : bigint;

// * Arrays
let list : number[];
// * ^  type[] => array of types

list = [ 1, 2, 3, 4, 5, 6]

console.log(list)


let stringList : string[];

stringList = ["a","b","c","d","e","f","g","h","i"]

console.log(stringList)

// * arrays
let booleanList : Array<boolean> = [ true, false,]

// * Tuples

let tuple: [ number, string ]
tuple = [ 1, "b" ]

// * enums

// const enum Categories {
//     webDevelopment,
    // 0
//     androidDevelopment,
    // 1
// }

const key = {
    a: 1,
    b: 2,
}

const enum Categories {
    webDevelopment = "webDevelopment",
    androidDevelopment = "androidDevelopment",
}

let response = Categories.webDevelopment;

function CheckResponse( value: Categories ){
    switch (value){
        case Categories.webDevelopment:{
            // do something
            console.log('web is selected', value)
            break
        }
        case Categories.androidDevelopment:{
            // do something else
            console.log('android is selected', value)
            break
        }
        default:{
            break
        }
    }
}

CheckResponse(response)

// * others
let und: undefined;
let n: null;
let val: any;

// Objects?
// * INTERFACES

interface Person {
    firstName: string,
    lastName: string,
    age: number,
    phone: string,
    job?: string
}

var person: Person;

person = {
    firstName: "Masai",
    lastName: "School",
    age: 10,
    phone: "+912123112312",
}

interface Coder extends Person {
    job: "software",
}

var coder : Coder = {
    firstName: "Raj",
    lastName: "Misra",
    age: 25,
    phone: "+912123112312",
    job: "software"
}

// * functions
function sum( a: number, b: number ) : number {
    console.log(a + b)
    return a + b
}

const greet = ( name: string ) : void => {
    console.log(`Greetings ${name}`)
}

sum(10,20) 

greet("Masai")

// 

interface PersonProps {
    firstName: string,
    lastName?: string
}

function joinPerson( person : PersonProps ) : string {
    if( person.lastName ){
        return `${person.firstName} ${person.lastName}`
    }
    else{
        return `${person.firstName}`
    }
}

var masai : PersonProps = {
    firstName: "Masai",
}

console.log( joinPerson( masai ) )

// * TYPES
// * UNION TYPE ( SINGLE | OR )
type SoftwareJobs = "frontend" | "backend" | "network" | "embedded" | "infrastructure";
type ManagerJob = "product manager" | "sales manager" | "admin manager" | "team lead";

type Jobs = SoftwareJobs | ManagerJob;

let jobs : Jobs;

let text : string | null;

// * UNION, AND

// request states

type RequestLoading = {
    state: "loading"
}

type RequestFailed = {
    state: "failed",
    errorCode: number
}

type Task = {
    title: string,
    status: boolean,
    id: number
}

type RequestSuccess = {
    state: "success",
    response: Task[] | null
}

type NetworkRequest = RequestLoading | RequestFailed | RequestSuccess;

let reqLoading: NetworkRequest = {
    state: "loading"
}


let reqFail: NetworkRequest = {
    state: "failed",
    errorCode: 404
}

let reqSuccess: NetworkRequest = {
    state: "success",
    response: [
        { title: "LEARN TYPESCRIPT", status: false, id: 1 }
    ]
}

console.log( reqSuccess.response && reqSuccess.response[0] && reqSuccess.response[0].title )


// * INTERSECTION TYPE
type ErrorType = {
    status: number,
    error?: {
        message: string
    }
}

type User = {
    username: string,
    email: string,
    id: number | string,
    phone: string,
    age: number
}

type UsersObj = {
    response: User[] | null
}

type UserResponse = UsersObj & ErrorType;

let resp : UserResponse = {
    response: [ { username: "masai", email: "masai@gmail.com", id: 1, phone: "123", age: 10} ],
    status: 200
}

let resp2 : UserResponse = {
    response: null,
    status: 401,
    error: {
        message: "Unauthorized"
    }
}

class Tree<Type>{
    value : Type;
    right: Type | null;
    left: Type | null;
    constructor(value: Type){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const elem = new Tree<number>(1)

console.log(elem)
