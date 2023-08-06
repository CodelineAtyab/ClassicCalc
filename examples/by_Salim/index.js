let num1=10;
num1=20.10;
let indentify="hello world, i'm new developer";
console.log(num1);
console.log(indentify);

class someEx{

firstName="salim";
lastName="Al Saadi";

 newObject(){
console.log(this.firstName+" "+ this.lastName );

}
}

var ex=new someEx;
ex.newObject();

/*calcPow = (x,y) => {
    return x*y;
}*/

function calcPow(base,exp){
    return Math.pow(base, exp);
}

console.log(calcPow(3,3));


let listNames=["salim", "khamis", "humaid", "Ismail", "khalid", "abu khalil"];//array
listNames.push("ali");//to add new item in array

console.log("print list from array");

listNames.forEach(
    (frinds) => {console.log(frinds);}
                   );//print array by foreach function
    
let dictionaryList=new Map();//dictionary 
dictionaryList.set(92777919, "Salim");
dictionaryList.set(992222303, "Salim");
dictionaryList.set(92125318, "ibrahim");
dictionaryList.set(99778747, "khalid");

console.log("print List from dictionary ");
dictionaryList.forEach(
    (printList) => {console.log( printList);}
                        );//print dictionary list

 console.log(dictionaryList.get(92777919));//get item by using key of dictionary
 
 let staffDetails= {
    name: "salim",
    id_Number: 1211,
    age: 31,
    city: "Jalaan"
}//create object,  it's using in JSON

 console.log(staffDetails);