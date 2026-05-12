//1
let fullName = "Lika Mamaladze";
let parts = fullName.split(" ");
let result = `${parts[0][0]}.${parts[1][0]}.`;
console.log(result);


//2
let email = " EXAMPLE@MAIL.COM ";
let cleaned = email.trim().toLowerCase();
let sta = cleaned.includes("@");

console.log(cleaned); 
console.log(sta);   

//3
let str = "luka";
let lastUpper = str.at(-1).toUpperCase();  
console.log(lastUpper); 


//4
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FooBar");
  else if (i % 3 === 0) console.log("Foo");
  else if (i % 5 === 0) console.log("Bar");
  else console.log(i);
}

//5
let text = "JS is stupid but sometimes cool";
let updated = text.replace("stupid", "s****d");
console.log(updated); 


//თეორია
//1. ჯავასკრიპტში გვაქვს სამი სახის ცვლადი: var, let და const. 

//2. ჯავასკრიპტში მონაცემთა 8 ძირითადი ტიპია. ისინი იყოფა პრიმიტიულ და არაპრიმიტიულ (რეფერენს) ტიპებად:
// პრიმიტიული :String,Number,Boolean,Undefined,Null ,BigInt ,Symbol
//  არაპრიმიტიული: Object, Array, Function, Date

//3.სტრინგის მასივად გადასაქცევად ვიყენებთ split() მეთოდს.
//4.კი, სტრინგი არის პრიმიტიული ტიპი. 
//5.length (),toLowerCase(),toUpperCase(),trim(),includes(),
// slice(),replace(),split()
