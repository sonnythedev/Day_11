/*
    Write your own version of includes() method on String that ignores letter case, and without using existing includes() method.

    solution("Hello, world", "Hello")   == true
    solution("Hello,wo world", "WORLD")   == true
    solution("Hello, world", "Goodbye") == false
*/

// Loop
function solution1(str1, str2){
    if (str2.length > str1.length) return false;

    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    let contains = false;
    let firstIndex = lowerStr1.indexOf(lowerStr2[0]);

    if (firstIndex == -1) return false; 

    for (let i = firstIndex; i < str1.length - str2.length; i++) {
        if (lowerStr1[i] == lowerStr2[0]) {
            contains = true;

            for (let j in lowerStr2) {
                let ij = Number(i) + Number(j);
                if ((lowerStr1[ij] != lowerStr2[j]) && ij < lowerStr1.length) {
                    contains = false;

                    break;
                }
            }
            
        }
    }

    return true;
}

console.assert(solution1("Hello, world", "Hello")   == true,  `solution1a() failed!`);
console.assert(solution1("Hello, world", "WORLD")   == true,  `solution1b() failed!`);
console.assert(solution1("Hello, world", "Goodbye") == false, `solution1c() failed!`);


// Cheat (use similar to includes() method)
function solution2(str1, str2) {
    if (str1.length < str2.length) return false;

    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

    return lowerStr1.indexOf(lowerStr2) != -1;
}

console.assert(solution2("Hello, world", "Hello")   == true,  `solution2a() failed!`);
console.assert(solution2("Hello, world", "WORLD")   == true,  `solution2b() failed!`);
console.assert(solution2("Hello, world", "Goodbye") == false, `solution2c() failed!`);

// Delete str2 from str1
function solution3(str1, str2) {
    if (str1.length < str2.length) return false;

    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();

    return lowerStr1.length != lowerStr1.replace(lowerStr2, "").length;
}

console.assert(solution3("Hello, world", "Hello")   == true,  `solution3a() failed!`);
console.assert(solution3("Hello, world", "WORLD")   == true,  `solution3b() failed!`);
console.assert(solution3("Hello, world", "Goodbye") == false, `solution3c() failed!`);

// Regular Expression (bonus)
function solution4(str1, str2) {
    if (str1.length < str2.length) return false;

    let regExp = new RegExp(str2, "i");
    
    return str1.search(regExp) != -1;
}

console.assert(solution4("Hello, world", "Hello")   == true,  `solution4a() failed!`);
console.assert(solution4("Hello, world", "WORLD")   == true,  `solution4b() failed!`);
console.assert(solution4("Hello, world", "Goodbye") == false, `solution4c() failed!`);

function solutionGreg(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    for (let i = 0; i != str2.length; i++) return str1.indexOf(str2) != - 1
}

console.assert(solutionGreg("Hello, world", "Hello")   == true,  `solutionGrega() failed!`);
console.assert(solutionGreg("Hello, world", "WORLD")   == true,  `solutionGregb() failed!`);
console.assert(solutionGreg("Hello, world", "Goodbye") == false, `solutionGregc() failed!`);


/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string for performance tests
let BigStr = require("./bigString");
let bigStr = new BigStr();
let text1  = bigStr.getText();
let text2  = bigStr.getPalindrom();

console.log(`text1.length:`, text1.length);
console.log(`text2.length:`, text2.length);

// test solution1()
let startTime = new Date().getTime();

solution1(text1, "i");
solution1(text2, "i");
solution1(text2,"7");

let finishTime = new Date().getTime();
let performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution1() is: ${performance} sec`);


// test solution2()
startTime = new Date().getTime();

solution2(text1, "i");
solution2(text2, "i");
solution2(text2,"7");

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution2() is: ${performance} sec`);

// test solution3()
startTime = new Date().getTime();

solution3(text1, "i");
solution3(text2, "i");
solution3(text2,"7");

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution3() is: ${performance} sec`);

// test solution4()
startTime = new Date().getTime();

solution4(text1, "i");
solution4(text2, "i");
solution4(text2,"7");

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solution4() is: ${performance} sec`);

// test solutionGreg()
startTime = new Date().getTime();

solutionGreg(text1, "i");
solutionGreg(text2, "i");
solutionGreg(text2,"7");

finishTime = new Date().getTime();
performance = (finishTime - startTime) / 1000;

console.log(`Performance of solutionGerg() is: ${performance} sec`);


/*
************************* PERFORMANCE RESULTS *************************

Performance of solution1() is: 0.285 sec
Performance of solution2() is: 0.003 sec
Performance of solution3() is: 0.001 sec
Performance of solution4() is: 0.001 sec
Performance of solutionGerg() is: 0.001 sec
*/