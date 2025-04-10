let arr = ["non", "banana", "mashina"];
let arr2 = ["asal", "olma", "aziza", "gul"];

function checkNWords(array) {
    return array.filter(word => word.toLowerCase().includes('n'));
}

function checkNoNWords(array) {
    return array.filter(word => !word.toLowerCase().includes('n'));
}

let hasN = checkNWords(arr);
let hasNotN = checkNoNWords(arr2);

console.log(hasN, "'n' harfi ishtirok etgan so'zlar");
console.log(hasNotN, "'n' harfi ishtirok etmagan so'zlar");
