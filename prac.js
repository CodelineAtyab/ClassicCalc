let x = 0;

calcPow = (x, y) => {
    return x*y;
}

function calcPow(base, exp) {
    return Math.pow(base, exp);
}

console.log(calcPow(8,2));

console.log("Hello World");

function calcAdd(a, b) {
    return a + b;
  }

  const form = document.getElementById("addForm");
  const resultElement = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
      resultElement.textContent = "Please enter valid numbers.";
    } else {
      const result = calcAdd(num1, num2);
      resultElement.textContent = "The sum is: " + result;
    }
});
function openNewPage() {
    window.open("https://www.calculator.net/scientific-calculator.html", "_blank"); 
}
