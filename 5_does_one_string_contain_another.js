/*
    Write your own version of includes() method on String that ignores letter case, and without using existing includes() method.

    solution("Hello, world", "Hello")   == true
    solution("Hello, world", "WORLD")   == true
    solution("Hello, world", "Goodbye") == false
*/

// Loop
function solution1(str1, str2){
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    str1Arr=str1.split(' ');
    for(let i=0; i<str1Arr.length; i++){
        if(str1Arr[i]==str2){
            return true;
        }
    }
    return false;
}

// Cheat (use similar to includes() method)
function solution2(str1, str2) {
    return str1.toLowerCase().indexOf(str2.toLowerCase())!=-1;
}

// Delete str2 from str1
function solution3(str1, str2) {
    return str1.toLowerCase()!=str1.toLowerCase().replace(str2.toLowerCase());
}

// Regular Expression (bonus)
function solution4(str1, str2) {
    ///return toLowerCase().test(str1.toLowerCase());
    return str2.test(str1);
}

/*
************************* PERFORMANCE TESTS *************************
*/

// import huge string for performance tests

// test solution1()
console.assert(solution1("Hello, world", "Hello")   == true);
console.assert(solution1("Hello, world", "WORLD")   == true);
console.assert(solution1("Hello, world", "Goodbye") == false);

// test solution2()

console.assert(solution2("Hello, world", "Hello")   == true);
console.assert(solution2("Hello, world", "WORLD")   == true);
console.assert(solution2("Hello, world", "Goodbye") == false);

// test solution3()

console.assert(solution3("Hello, world", "Hello")   == true);
console.assert(solution3("Hello, world", "WORLD")   == true);
console.assert(solution3("Hello, world", "Goodbye") == false);

// test solution4()

console.assert(solution4("Hello, world", "Hello")   == true);
console.assert(solution4("Hello, world", "WORLD")   == true);
console.assert(solution4("Hello, world", "Goodbye") == false);


/*
************************* PERFORMANCE RESULTS *************************


*/