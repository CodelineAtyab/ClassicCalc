const calculator = {
    MOd: function(a, b) {
      return a % b;
    },
  };
  
  // Test the MOD method
  const num1 = 10;
  const num2 = 3;
  const result = calculator.MOd(num1, num2);
  console.log(`${num1} % ${num2} = ${result}`);