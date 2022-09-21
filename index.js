const spy = (name1) => {
 return `Hi, my name is ${name1}! `;
}
console.log(spy("Daniel"));

const receivesAFunction = (greeting) => {
 const callBack = greeting();
 return callBack;
}
console.log(receivesAFunction(spy));

const returnsANamedFunction = () => {
return function nameFunction() {
 console.log("Let's get this");
}
};

const returnsAnAnonymousFunction = () => {
 return function() {
  console.log("Please pass");
 }
};