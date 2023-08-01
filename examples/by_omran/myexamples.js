let num1 = 10;
let num2 = 20;

let result = num1 + num2;

console.log(result);

let isRunning = true;
let amount = 25.5;
let something = null;
let myName = "Atyab";

console.log(myName.substring(0,2));

let listOfNames = ["Atyab", "M.SAid", "Salim"]

for(let i=0; i<listOfNames.length; i++) {
    console.log(listOfNames[i]);
}

listOfNames.forEach(
    (currName)=>{console.log(currName);}
);

let studentRecord = new Map();
studentRecord.set("id", 1);
studentRecord.set("name", "Mr.A");
studentRecord.set("age", 33);

studentRecord.forEach((currElem)=>{
    console.log(currElem);
});

let playerRecord = {
    id: 10,
    playerName: "Mr.P",
    age: 33
}

console.log(playerRecord); // That is why we call JSON, JSON

class Car {
    id=0;
    model="";

    constructor() {
        this.id=0;
        this.model="Unknown";
    }

    getModel = () => {
        return this.model;
    }
}

let myCar = new Car();
console.log(myCar.getModel());

if(1 < 5) {
    console.log("do something");
} else {
    console.log("In else");
}