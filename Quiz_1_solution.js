/*
Term2: Quiz 1 
Date:01/24/2019

Please Print your name
Name:

Don’t Google for the full solution! It’s bad for your health!
Questions/Problems:


*/ 

/*
1. Given the following string “One cat, two cats, three cats”
      a. Find the position of occurrence of ‘cat’
      b. Find the position of occurrence(index) of last ‘cat’ (hint: three cats)
      c. Find the position of occurrence(index) of the middle ‘cat’ (hint: two cats)
      d. Replace the first ‘cat’ with a ‘bird’
      e. Replace all the ‘cat’ with ‘bird’. [If you used global replace \cat\; can you make it work with regular loop?]
*/

let str="One cat, two cats, three cats";

function solution_1_a(){
    return str.indexOf('cat');
}
function solution_1_b(){
    return str.lastIndexOf('cat');
}
function solution_1_c(){
    let firstIndex=str.indexOf('cat');
    return str.indexOf('cat',firstIndex+1);
}
function solution_1_d(){
     return str.replace('cat','bird');
}
function solution_1_e(){
    return str.replace(/cat/,'bird');
}

//One cat two cats three cats
//One bird
function solution_1_e_reg_loop(){
    //let outputArr=[];
    let output='';
    for(let i=0; i<str.length-3; i++){
        if(str[i]==' '){
            //we found the space character
            if(str[i+1]=='c' && str[i+2]=='a' && str[i+3]=='t'){
                //if next three characters are c,a,t
                //outputArr.push(' '); 
                //outputArr.push('b','i','r','d');
                output +=' bird';
                i=i+3; //incrementing the i by 3 as we can skip next three characters at this point
            }
            else{
                //it didn't find a cat
                //outputArr.push(str[i]); 
                output +=str[i];
            }
        }
        else{
            //outputArr.push(str[i]);
            output +=str[i];
        }
    }
    return output;
}
str="One cat, two cats, three cats";
function solution_1_e_while_loop(){
    while(str.includes('cat')){
        str=str.replace('cat','bird');
        //One bird, two cats, three cats //after 1st iteration of while loop
        //One bird, two birds, three cats //2nd iteration

    }
    return str;
}

console.log(str);
console.log('position of first cat: ',solution_1_a());
console.log('position of last cat: ',solution_1_b());
console.log('position of middle cat: ',solution_1_c());
console.log('first cat replaced with bird: ',solution_1_d());
console.log('all cat replaced with bird 1 e: ',solution_1_e());
console.log('all cat replaced with bird(for loop version): ',solution_1_e_reg_loop());
console.log('all cat replaced with bird(while loop): ',solution_1_e_while_loop());

/*
2. Write a function that passes a string and a word and returns if the string contains the word or not. Return type should be boolean. */

function solution_2(str,word){
    return str.includes(word); //it returns a boolean value since includes return boolean
}
/*
function solution_2_reg_loop(str,word){
    //This sentence contains diamond
    //diamond
    let wordLen=word.length;
    let i=0;
    while(i<str.length){
        //make sure we don't go out of bound of the string
        let charFound=0;
        for(let j=0; j<wordLen; j++){
            if(str[i+j]==wordLen[j]){
                charFound++;
            }
        }
        if(charFound==(wordLen)){
            return true;
        }

       i=i+wordLen; //we can skip the lengh of characters here
    }
    return false;
    
}
*/

console.log('This sentence contains diamond:',solution_2('This sentence contains diamond','contains diamond'));

//console.log('This sentence contains diamond:',solution_2_reg_loop('This sentence contains diamond','diamond'));

/*
3. You have the following string: “I like Tom Cruise, Britney Spears, Brad Pitt, Bruce Willis”. You changed your mind and think that
You don’t like Britney Spears any more. Can you remove ‘Britney Spears’ with out using the replace or splice function? You can
’Split” to break it down to array, Then may be go through the item..
*/
str='I like Tom Cruise, Britney Spears , Brad Pitt, Bruce Willis';
function solution_3(){
    strArr=str.split(' ');
    let output='';
    for(let i=0; i<strArr.length; i++){
        if(strArr[i]!='Britney' && strArr[i]!='Spears'){
            console.log(strArr[i]);
            output+=' '+strArr[i];
        }
    }
    //return strArr.join(' ');
    return output;
}

console.log('Remove Britney:',solution_3('I like Tom Cruise, Britney Spears, Brad Pitt, Bruce Willis','Britney Spears'));

/*
4. Write a function that calculates the number of consonant. Consonant are basically non vowels. The return type should be number. */

str='A b c d e f g h i';
function solution_4(str){
   str=str.toLowerCase();
   let count=0;
   for(let i=0; i<str.length; i++){
       //if('bcdfghjklmnpqrstwxyz'.includes(str[i])){
        if('bcdfghjklmnpqrstwxyz'.indexOf(str[i])!=-1){ //this means it found the character
           //This must be a consonant
           count++;
       }
   }
   return count;
}

console.log(str);
console.log('count of consonant: ',solution_4(str));

/*
5. You have the following array  [‘bob’,’Alice’,’camron’, ‘David’]
                 a. Add ‘Michael’ and ‘Dennis’ at the end. Can you do this without using PUSH function?
                 b. Add ‘Jenny’, ’Richie’ at the beginning
                 c. You realized, you didn’t mean to add ‘Dennis’. Remove it.
                 d. You realized, ‘camron’ also needs to be removed. And you don’t know the index, you just know ‘camron’

*/

let arr=['bob','Alice','camron', 'David'];
console.log(arr);

function solution_5_a(){
    //arr.push('Michael','Dennis');
    //arr=arr.concat('Michael','Dennis'); //concat doesn't modify the array
    //...arr ->'bob','Alice','camron', 'David'
    //arr=[...arr,'Michael','Dennis'];
    arr[arr.length]='Michael';
    arr[arr.length]='Dennis';
}
solution_5_a();
console.log('After Michael, Dennis',arr);

function solution_5_b(){
    //arr.unshift('Jenny','Richie');
    //arr=['Jenny','Richie'].concat(arr);
    arr=['Jenny','Richie',...arr];

}
solution_5_b();
console.log('Adding Jenny and Richie at the beginning:',arr);

function solution_5_c(){
    //arr.pop('Dennis');
    arr.splice(arr.indexOf('Richie'),1); //splice modifies the original array, where as slice returns part of the array
}
solution_5_c();
console.log('Remove Dennis:',arr);

function solution_5_d(){
    arr.splice(arr.indexOf('camron'),1);
}
solution_5_d();
console.log(arr);

/*
6. You have the following array of numbers: [1,2,3,4,5,100,102,101,120] Write a function or code that will check
   If each element is even or odd. Then it will return output like this : [‘odd’,’even’,’odd’,’even’,’odd’,’even’,’even’,’odd’,’even’]

     a. First try to do it with regular looping
     b. Then do it with map function
*/

function solution_6_a(arr){
    let outputArr=[];
    for(let i=0; i<arr.length; i++){
        /*
        if(arr[i]%2==0){
            //even
            outputArr.push('even');
        }
        else{
            //odd
            outputArr.push('odd');
        }
        */
        arr[i]%2==0?outputArr.push('even'):outputArr.push('odd');
    }
    return outputArr;
}

function solution_6_b(arr){
    //Longer version
    
    
    return arr.map(
        function(e){
            if(e%2==0){
                //it's even
                return 'even';
            }
            else{
                return 'odd';
            }
        }
    );
    

    ////OR Shorter version
    //return arr.map(e=>{
        //e%2==0?'even':'odd';
    //})
}

arr=[1,2,3,4,5,100,102,101,120,0,-4];
console.log(arr);
console.log('solution_6_a',solution_6_a(arr));
console.log('solution_6_b',solution_6_b(arr));

/*
7.  Given the following array: [1,2,3,200,5,6,7,100] find out if any of the number is greater than 100. The return type should be boolean. */

let myArr=[1,2,3,99,101,5,6,7,98];

function solution_7(arr){
    return arr.some(
       function(e){
           if(e>100){
               return true;
           }
           else{
               return false;
           }
       }
    );
}

console.log(solution_7(myArr));



     
