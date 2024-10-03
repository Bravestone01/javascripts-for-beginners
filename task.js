// task 1 find largest num  in arry

//  let arr =  [1 , 3 , 5, 6 ,4, 4, 3,434,22,4,2,1,5,6,7,4]

//  let largest = 0;

//  for (let index = 0; index < arr.length; index++) {
//     if (arr[index] > largest) {
//         largest = arr[index]

//     }

//  }
//  console.log(largest);
// completed.

// task 2  remove simmilar data  from arry

// let arr =  [1 , 3 , 5, 6 ,4, 4, 3,434,22,4,2,1,5,6,7,4]

// let uniqueArry = [];

// for (let index = 0; index < arr.length; index++) {
//     if (!uniqueArry.includes(arr[index])) {

//         uniqueArry.push(arr[index])

//     }

// }

// console.log(uniqueArry);
//completed ..

// task 3 find the missing number in arr

// let arr =  [1,2,4,5];

// for (let index = 1; index < arr.length; index++) {
//     if (arr[index] - arr[index -1] !== 1) {

//        console.log(`${arr[index] -1} is Missing Number in Array`);

//     }
// }

// completed..

// task 4 find spaces in arry

// let arry = ["hello", "world", " " ,"this", "javascript", " "]

//  function findSpace (arr){

//  for (let index = 0; index < arr.length; index++) {
//     if (arr[index].includes(" ")) {
//         return  index

//     }

//  }

//  return "No spaces found"

//  }

//  console.log(findSpace(arry));

// completed.

// Task 5 find prime number

// function primeNum(num) {
//   if (num === 1) {
//     return false;
//   }
//   for (let index = 2; index <= num; index++) {
//     if (num % index === 1) {
//       return true;
//     }
//     return false;
//   }
// }

// console.log(primeNum(array[index]));

// completed..

// task 6 find prime number and not prime numbers in arry.

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let primeNumber = [];

// let notPrimeNumber = [];

// for (let index = 0; index < array.length; index++) {

//     if (primeNum(array[index]) === true) {

//         primeNumber.push(array[index])

//     } else{
//         notPrimeNumber.push(array[index])
//     }

// }

// console.log('prime number ' , primeNumber);
// console.log('Not prime number ' , notPrimeNumber);

//completed..

//  task 7 completed find factorial of a number

// console.log(2 && 3 &&  true && "hello" ) ==> short sircuit

// const fac = (num)=>{

// if (num == 1 || num < 0 || num == 0) {
//     console.log("OH BAI VALUE SAHEE SE DEE TIME WASTE NAHI KR ");

// }else{ for (let index = num -1 ;  index >= 1; index--) {
//console.log(index);
//         num *= index
//     }
//    console.log(num )
// }
// }
// fac(5);

//completed...

// task 8 fibconnai Series

// let b = 1;
// let c = 1;

// for (let
//      index = 1; index < 100 ; index++) {

//     let a = b
//     b = c
//     c = a + b;
//     console.log(c);

// }

// task done





// Task 9 find smallest number in aaray.

let arr = [1, 13, 115, 0,16, 2, 18, ];

let smallest = arr[0];

for (let index = 0; index < arr.length; index++) {
  if (smallest > arr[index]) {
    smallest = arr[index];
  }
}

console.log(smallest);


//completed..