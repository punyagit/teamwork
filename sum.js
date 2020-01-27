// If you run npm test you will see some test is failed
// so request team to implement it
function add(a, b) {
  // check a and b is number or not aswell
  if (typeof a === "string" || typeof b === "string") {
    return "String can't be Calculated";
  } else return a + b;
}

function sumAll(arr) {
  // Array should only contain two number [1,4]
  // this function will count between two number 1 to 4  "1+2+3+4 = 10"
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }
  return total;
}

module.exports = { add, sumAll };
