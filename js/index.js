// console.log("I'm ready!");


// Iteration 1: Names and Input

const hacker1 = "Vicky";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Carol";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

//Iteration 3.1

let spacedName = ""

for(let i = 0; i < hacker1.length; i++ ){
    let char = hacker1[i].toUpperCase() + " ";
    spacedName += char;

}
console.log(spacedName);

//Iteration 3.2

let spacedName2 = "";
for (let i = hacker2.length -1; i >= 0; i--) {
    let char = hacker2[i];
    spacedName2 += char;
}
console.log(spacedName2);


//This was our first try on Iteration 3.3

// let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
// let charIndex;
// let charIndex2;

// for (let i = 0; i < alpha.length; i++){
//     if (alpha[i] === hacker1[0]) {
//         charIndex = i;
//     }
// } 

// for (let i = 0; i < alpha.length; i++){
//     if (alpha[i] === hacker2[0]) {
//         charIndex2 = i;
//     }
// }


// if (charIndex < charIndex2){
//     console.log(`The driver's name goes first.`);
// } else if (charIndex2 < charIndex){
//     console.log(`Yo, the navigator goes first definitely.`);
// } else {
//     console.log(`What?! You both have the same name?`)
// }



//Iteration 3.3

loop1:
for (let i = 0; i < hacker1.length; i++){
    loop2:
    for (let j = 0; j < hacker2.length; j++) {
    if (hacker1[i] < hacker2[j]) {
        console.log("The driver's name goes first.")
        break loop1;
    } else if (hacker2[j] < hacker1[i]){
        console.log("Yo, the navigator goes first definitely.")
        break loop1;
    } else if (hacker1[i] === hacker2[j] && hacker1.length === hacker2.length){
        console.log("What?! You both have the same name?")
        break loop1;
    }
}
}