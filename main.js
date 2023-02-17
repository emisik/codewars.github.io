//practice on Scope
function calc() {
  let extra = 5;
  let sum = function (a, b) {
    return a + b;
  };

  let total = extra + sum(2, 3);
  console.log(extra);
  console.log(total);
}

//String Methods
function solution(str, ending) {
  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}
console.log(solution("abc", "bc"));
console.log(solution("abc", "d"));

//String Methods
function getCount(str) {
  let string = 0;
  let vowels = "aeiou";
  let lower = str.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    if (vowels.includes(lower[i])) {
      string++;
    }
  }
  return string;
}

console.log(getCount("comeingae"));

//Use of built in objects
function litres(time) {
  return Math.floor(0.5 * time);
}

//Use .replace () method to remove vowes in a string

function remove(str) {
  return str.replace(/[aeiou]/gi, "");
}
console.log(remove("whatcanbedone"));

//Use of reduce method
function XO(str) {
  let lower = str.toLowerCase();
  let split = lower.split("");

  let reducex = split.reduce((n, value2) => {
    return n + (value2 === "x");
  }, 0);

  let reducey = split.reduce((n, value2) => {
    return n + (value2 === "o");
  }, 0);

  if (reducex === reducey) {
    return true;
  } else {
    return false;
  }
}

function findOdd(A) {
  const count = (arr, val) => arr.filter((item) => item === val).length;
  let target = 0;
  A.forEach((arrnum) => {
    if (count(A, arrnum) % 2 !== 0) {
      target = arrnum;
    }
  });
  return target;
}
