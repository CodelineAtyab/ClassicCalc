
function calcAdd(a, b) {
    return a + b;
  }
  const result1 = calcAdd(10, 20);
  console.log(result1); // Output: 30
  

console.log("Difference Method");
function calculateDifference(num1, num2) {
    return num1 - num2;
}

// Example usage:
let result = calculateDifference(10, 5);
console.log("Difference:", result); 

function divide(a, b) {
  let quotient = (a / b) >> 0
  let remainder = a % b;
  return [quotient, remainder];
}

const calculator = {
    MOD: function(a, b) {
      return a % b;
    },
  };
  
  // Test the add method
  const num1 = 15;
  const num2 = 4;
  const myResult = calculator.MOD(num1, num2);
  console.log(`${num1} % ${num2} = ${result}`);

  function countOccurrences (arr) {
    let counts = {};
    for (let num of arr) {
      if (counts [num]) {
        counts [num]++;
      } else {
        counts [num] = 1;
      }
    }
    return counts;
  }
  
  let numbers = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
  let result2 = countOccurrences (numbers);
  // Log the result2
  console.log (result2);

