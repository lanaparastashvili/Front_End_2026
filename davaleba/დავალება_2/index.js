//1)
let arr_1 = [];
for (let i = 5; i <= 15; i++) {
  arr_1.push(i);
}
console.log("1)", arr_1);

//2)
let arr_2 = [1, 2, 3, 4, 5];
for (let i = arr_2.length - 1; i >= 0; i--) {
  console.log("2)", arr_2[i]);
}

//3) 
let arr_3 = [100, 2, 3, 9];
let min_3 = arr_3[0];
for (let i = 1; i < arr_3.length; i++) {
  if (arr_3[i] < min_3) min_3 = arr_3[i];
}
console.log("3)", min_3);

//4)
let arr_4 = [1, 2, 3, 4, 5, 6, 7];
let middle3_4 = arr_4.slice(2, 5); // [3,4,5]
console.log("4)", middle3_4);

//5) 
let arr1_5 = [1, 2];
let arr2_5 = [3, 4];
let merged_5 = arr1_5.concat(arr2_5);
console.log("5)", merged_5);

//6) 
let arr_6 = [1, 2, 3, 4, 5, 6, 6, 7, 7];
let unique_6 = [...new Set(arr_6)];
console.log("6)", unique_6);

//7) 
let arr_7 = [1, 2, 3, 4, 5, 6, 7];
let evens_7 = [];
let odds_7 = [];
for (let i = 0; i < arr_7.length; i++) {
  if (arr_7[i] % 2 === 0) evens_7.push(arr_7[i]);
  else odds_7.push(arr_7[i]);
}
console.log("7) ლუწი:", evens_7, "კენტი:", odds_7);

//8) 
let arr_8 = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4];
let positiveCount_8 = 0;
let negativeSum_8 = 0;
for (let i = 0; i < arr_8.length; i++) {
  if (arr_8[i] > 0) positiveCount_8++;
  else if (arr_8[i] < 0) negativeSum_8 += arr_8[i];
}
console.log("8) დადებითების რაოდენობა:", positiveCount_8, "| უარყოფითების ჯამი:", negativeSum_8);

//9) 
let arr_9 = [1, -2, 3, -4];
let inverted_9 = [];
for (let i = 0; i < arr_9.length; i++) {
  inverted_9.push(-arr_9[i]);
}
console.log("9)", inverted_9);

//10) 
let arr_10 = [1, [2, [3]], [4]];
let flat_10 = arr_10.flat(Infinity);
console.log("10)", flat_10);

//11) 
let fruits_11 = ["apple", "banana", "orange", "kiwi"];
fruits_11.splice(1, 1);

// 
let orangeIndex_11 = fruits_11.indexOf("orange");
fruits_11.splice(orangeIndex_11, 0, "mango");

console.log("11)", fruits_11);
