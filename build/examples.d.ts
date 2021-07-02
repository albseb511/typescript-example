declare let age: number;
declare let firstName: string;
declare let bool: boolean;
declare let biginteger: bigint;
declare let list: number[];
declare let stringList: string[];
declare let booleanList: Array<boolean>;
declare let tuple: [number, string];
declare const key: {
    a: number;
    b: number;
};
declare const enum Categories {
    webDevelopment = "webDevelopment",
    androidDevelopment = "androidDevelopment"
}
declare let response: Categories;
declare function CheckResponse(value: Categories): void;
declare let und: undefined;
declare let n: null;
declare let val: any;
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    job?: string;
}
declare var person: Person;
interface Coder extends Person {
    job: "software";
}
declare var coder: Coder;
declare function sum(a: number, b: number): number;
declare const greet: (name: string) => void;
interface PersonProps {
    firstName: string;
    lastName?: string;
}
declare function joinPerson(person: PersonProps): string;
declare var masai: PersonProps;
declare type SoftwareJobs = "frontend" | "backend" | "network" | "embedded" | "infrastructure";
declare type ManagerJob = "product manager" | "sales manager" | "admin manager" | "team lead";
declare type Jobs = SoftwareJobs | ManagerJob;
declare let jobs: Jobs;
declare let text: string | null;
declare type RequestLoading = {
    state: "loading";
};
declare type RequestFailed = {
    state: "failed";
    errorCode: number;
};
declare type Task = {
    title: string;
    status: boolean;
    id: number;
};
declare type RequestSuccess = {
    state: "success";
    response: Task[] | null;
};
declare type NetworkRequest = RequestLoading | RequestFailed | RequestSuccess;
declare let reqLoading: NetworkRequest;
declare let reqFail: NetworkRequest;
declare let reqSuccess: NetworkRequest;
declare type ErrorType = {
    status: number;
    error?: {
        message: string;
    };
};
declare type User = {
    username: string;
    email: string;
    id: number | string;
    phone: string;
    age: number;
};
declare type UsersObj = {
    response: User[] | null;
};
declare type UserResponse = UsersObj & ErrorType;
declare let resp: UserResponse;
declare let resp2: UserResponse;
declare class Tree<Type> {
    value: Type;
    right: Type | null;
    left: Type | null;
    constructor(value: Type);
}
declare const elem: Tree<number>;
