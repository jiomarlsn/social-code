// Callback

function greeting(value) {
  console.log("Hello " + value);
}

function sum(a, b, callback) {
  const c = a + b;

  callback(c);
}

sum(1, 10, (soma) => {
  console.log(soma);
});

// Funções

// function sum(a, b) {
//   const c = a + b;

//   return a + b;
// }

// let sum = function (a, b) {
//   return a + b;
// };

// Arrow Function

// const sum = (a, b) => a + b;

// const a = sum(1, 2);
// const b = sum(a, 5);
// const c = sum(b, a);
// const d = sum(c, b);

// console.log(a, b, c, d);
