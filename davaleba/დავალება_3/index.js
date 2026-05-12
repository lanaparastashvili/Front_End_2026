//1)
let task1 = [1,2,3].map((n) => n*3);
console.log(task1);

//2)
let task2 =[1,2,3,4,5,6,9].filter((n) => n%3 ===0);
console.log(task2);

//3)
let task3input = [1,-2,3,-4,5];
let task3 = task3input.filter((n) => n> 0).reduce((sum,n) => sum +n,0);
console.log(task3); 

//4)
let namearr = ["giorgi","nika","mariami"];
let task4 = namearr.map((s) => s.slice(0,-1));
console.log(task4);

//5)
let taskinput = [1,2,3,4];
let task5 = taskinput.map((n) => n*2).filter((n) => n%3 ===0);
console.log(task5);

//6)
let numsarr = [1,-1,-2,-10,111,3,2,5];
let task6 = [...numsarr].sort((a,b) => a-b);
console.log(task6);

//7)
let task7in = [1,2,3,4,5];
let task7 = task7in.map((n) => n*2).filter((n)=> n>5);
console.log(task7);

//8)
let task8i = [1,1,1,1,2,2,3,3,3];
let task8 = [...new Set(task8i)];
console.log(task8);

//9)
let arrsmall = [-1,20,90,4,5,111];
let sortedsmall = [...arrsmall].sort((a,b) => a-b);
let task9 = sortedsmall[0]+sortedsmall[1];
console.log(task9);