//1)
const laptops = [
    { model: "Dell XPS 13", price: 1800 },
    { model: "MacBook Pro 14", price: 2499 },
    { model: "LENOVO ThinkPad X1", price: 2100 },
    { model: "Asus Zephyrus G14", price: 1999 },
];
let expensive = laptops[0];
for(let i =1;i<laptops.length;i++){
    if(laptops[i].price>expensive.price) expensive = laptops[i];
    
}
console.log(expensive);


//2)
const box = {
    width :4,
    height:6,
    getArea(){
        return this.width*this.height;
    }
}
console.log(box.getArea());

//3)
const students = [
    {name:"giorgi", score:85, passed:true},
    {name:"nika", score:50, passed:false},
    {name:"mariam", score:92, passed:true},
    {name:"luka", score:60, passed:true},
];
students.filter((s) => s.passed).forEach((s)=>console.log(s.name));

//4)
const products = [
    {title:"pencil",price:2},
    {title:"notebook",price:5},
    {title:"backpack",price:35},
    {title:"ruler",price:3},
    {title:"calculator",price:40},
];
const cheap = products.filter((p)=>p.price<10).map((p) =>p.title);
console.log(cheap);

//5)
const movies = [
    {title:"inception", rating:9},
    {title:"avatar", rating:7.5},
    {title:"joker", rating:8.2},
    {title:"tenet", rating:6.9},
];
const raiting = [...movies].sort((a,b) => a.rating - b.rating);
console.log(raiting);


//6)
const phones =[
    {model:"iPhone 15", price:1200},
    {model:"Samsung Galaxy S24", price:950},
    {model:"Xiaomi Redmi 13", price:250},
    {model:" Pixel 8", price:800},
];
let cheapest = phones[0];
for(let i =0;i<phones.length;i++){
    if(phones[i].price<cheapest.price)cheapest = phones[i];

}
console.log(cheapest);

//7)
const books=[
    {title:"harry potter",page:500},
    {title:"the little prince",page:120},
    {title:"lord of the rings",page:700},
    {title:"animal farm",page:250},
];
books.filter((b)=>b.page>300).forEach((b)=>console.log(b.title));

//8)
const phones = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 }
];
const phonesSorted = [...phones].sort((a, b) => a.price - b.price);
let phonesTotal = 0;
for (let i = 0; i < phonesSorted.length; i++) {
  phonesTotal += phonesSorted[i].price;
}
console.log("sorted:", phonesSorted, "total:", phonesTotal);
