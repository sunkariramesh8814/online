// // // // let numbers = [5, 3, 8, 1, 2];

// // // // for (let i = 0; i < numbers.length; i++) {
// // // //   for (let j = 0; j < numbers.length - i + 1; j++) {
// // // //     if (numbers[j] < numbers[j + 1]) {
// // // //       [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
// // // //     }
// // // //   }
// // // // }

// // // // console.log(numbers);

// // // // let arr = "my name is teju";

// // // // let rev=''

// // // // for(let i=arr.length-1; i>=0;i--){
// // // //   rev = rev + arr[i]
// // // // }

// // // // // let result = arr
// // // // //   .split(" ") // ["my" "name" "is" "teju"]
// // // // //   .map((word) => word.split("").reverse().join(""))
// // // // //   .join(" ");
// // // // // console.log(result);

// // // let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// // // let evennum = [];
// // // for (let i = 0; i < numbers.length; i++) {
// // //   if (numbers[i] % 2 === 0) {
// // //     evennum.push(numbers[i]);
// // //   }
// // // }
// // // console.log(evennum);

// // // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // let evennum = [];
// // // for (let i = 0; i < arr.length; i++) {
// // //   if (arr[i] % 2 !== 0) {
// // //     evennum.push(arr[i]);
// // //   }
// // // }

// // // console.log(evennum);

// // // let str = "my name is ramesh";

// // // let capital = str
// // //   .split(" ")
// // //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// // //   .join(" ");
// // // console.log(capital);

// // let arr = [10, 25, 3, 99, 56, 7];

// // let min = arr[0];
// // for (let i = 0; i < arr.length; i++) {
// //   if (arr[i] < min) {
// //     min = arr[i];
// //   }
// // }

// // console.log(min);
// let str = "sunkari ramesh";

// let charCount = {};

// for (let char of str) {
//   charCount[char] = (charCount[char] || 0) + 1;
// }

// console.log(charCount);
