// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "harshita",
    "full name": "harshita jain",
    [mySym]: "mykey1",  //important
    age: 18,
    location: "Jaipur",
    email: "harshita@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "harshita@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "harshita@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());