let str="String with Apple in it";

let index=str.search('apple');
console.log('apple index:',index);

index=str.search('Apple');
console.log('Apple index:',index);

index=str.search(/apple/i); //case insensitive regex

console.log('apple index case insensitive:',index);

str="String with Apple Apple apple apple in it";
index=str.search(/apple/g); //case insensitive regex
console.log('apple index case insensitive and global:',index);


////Lets explore match function

str="String with 1,2,3,4,5,6,7,8,9 in it";
let pattern=/[1-5]/g;
let result=str.match(pattern);
console.log('1-5 pattern:',result);

pattern=/[\D]+/g;
result=str.match(pattern);
console.log('Non digit pattern:',result);

str="String with (917)555-444";
//We want to replace all the digits with *
pattern=/[\d]/g;
result=str.replace(pattern,'*');
console.log('Result after digit replacement:',result);

pattern=/[\D]/g;
result=str.replace(pattern,'*');
console.log('Result after non digit replacement:',result);

str='A String with $ * & ^ # @ ! in it';
pattern=/[$*&!^#@]/g;
result=str.replace(pattern,'');
console.log('Result after taking out the funny characters:',result);


str="String with 1,2,3,4,5,6 in it";
pattern=/[1-5]+/;
console.log('it has 9:',pattern.test(str));

console.log('it has 9:',pattern.exec(str));

// ^ specifies the start and $ specifies the end of the string

str="This string starts with T and ends with h";
pattern=/^T$/;
console.log('Pattern pass the string?:',pattern.test(str));


//ALSO DEMO test and exec 

pattern=/^Abcd.+fg$/; /// . doesn't require []
console.log(pattern.test('Abcdeeeefg'));

pattern=/\(\d{3}\)\d{3}-\d{4}/g;

//console.log(pattern.test('aaaaaaa'));
//console.log(pattern.test('aaaaaa'));
console.log(pattern.test('(347)223-3434'));

str=`This str has phone numbers: (347)555-1122
(347)232-1122 
(347)343-1122 (347)343-1122 (347)589-1122
(347)455-1122 This str has phone numbers This str has phone numbers This str has phone numbers This str has phone numbers This str has phone numbers This str has phone numbers This str has phone numbers This str has phone numbers (347)555-1122`;

str=str.replace(pattern,'(***)***-****');
console.log(str);





