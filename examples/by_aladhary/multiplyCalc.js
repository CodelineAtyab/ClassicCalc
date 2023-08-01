const calculator = {
    multiply: function(a, b) {
      return a * b;
    },
  };
  
  // Test the multiply method
  const num1 = 5;
  const num2 = 3;
  const result = calculator.multiply(num1, num2);
  console.log(`${num1} * ${num2} = ${result}`);