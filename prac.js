const calculator = {
    MOD: function(a, b) {
      return a % b;
    },
  };
  
  // Test the add method
  const num1 = 15;
  const num2 = 4;
  const result = calculator.MOD(num1, num2);
  console.log(`${num1} % ${num2} = ${result}`);