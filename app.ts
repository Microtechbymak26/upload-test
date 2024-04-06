
// lower case
let personName: string ="Ateeb"
console.log("lowercase:", personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());

// Tittle case
console.log("tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
// number addition multiplication and %
let a : number =29;
let b : number =30;
console.log("a * b=",a * b);