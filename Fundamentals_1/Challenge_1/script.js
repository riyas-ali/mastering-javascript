// let markWeight = 78;
let markWeight = 95;
// let markHeight = 1.69;
let markHeight = 1.88;

// let jhoneWeight = 92;
let jhoneWeight = 85;
// let jhoneHeight = 1.95;
let jhoneHeight = 1.76;

let markBmi = markWeight/(markHeight*markHeight);
let jhoneBmi = jhoneWeight/(jhoneHeight*jhoneHeight);
console.log('markBmi', markBmi);
console.log('jhoneBmi', jhoneBmi);
let markHigherBMI = markBmi > jhoneBmi;
console.log('markHigherBMI', markHigherBMI);
