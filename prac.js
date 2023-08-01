setTimeout(()=>{
    let myHeading2 = document.getElementById("myMsg");
    myHeading2.innerHTML = "You dont selected.....";
}, 3000)

let x = 0;

function calcPow(base, exp) {
    return Math.pow(base, exp);
}

console.log(calcPow(8,2));

console.log("Hello World");