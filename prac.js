setTimeout(()=>{
    let myHeading2 = document.getElementById("myMsg");
    myHeading2.innerHTML = "You are selected.....";
}, 3000)

let x = 0;

function calcPow(base, exp) {
    return Math.pow(base, exp);
}

console.log(calcPow(8,2));

console.log("Hello World");

const calculator = {
    MOd: function(a, b) {
      return a % b;
    },
  };
  
  // Test the MOD method
  const num1 = 15;
  const num2 = 4;
  const result = calculator.MOd(num1, num2);
  console.log(`${num1} % ${num2} = ${result}`);