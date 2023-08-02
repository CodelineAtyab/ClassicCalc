const calculator = {
    ADD: function(a, b) {
      return a + b;
    },
  };
  
  // Test the add method
  const num1 = 10;
  const num2 = 3;
  const result = calculator.ADD(num1, num2);
  console.log(`${num1} + ${num2} = ${result}`);