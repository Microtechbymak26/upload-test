"use strict";
// lower case
let personName = "Ateeb";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Tittle case
console.log("tittlecase:", personName.replace(/\bw/g, c => c.toUpperCase()));
// number addition multiplication and %
let a = 29;
let b = 30;
console.log("a * b=", a * b);
