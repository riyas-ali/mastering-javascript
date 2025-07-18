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

if (markHigherBMI) {
    // console.log("Mark's BMI is higher than John's!");
    // console.log("Mark's BMI" + "(" + markBmi + ")" + "is higher than John's (" + jhoneBmi + ")!");
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`)
} else {
    // console.log("John's BMI is higher than Mark's!");
    // console.log("John's BMI" + "(" + jhoneBmi + ")" + "is higher than Mark's (" + markBmi + ")!");
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`)
}
