document.getElementById("gcdForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const num1 = parseInt(document.getElementById("number1").value);
  const num2 = parseInt(document.getElementById("number2").value);
  const gcd = calculateGCD(num1, num2);
  document.getElementById(
    "result"
  ).innerText = `GCD of ${num1} and ${num2} is ${gcd}`;
});

function calculateGCD(a, b) {
  if (!b) {
    return a;
  }
  return calculateGCD(b, a % b);
}
