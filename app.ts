// // number string boolean array object any
// const nameFour: string = "Ali";
// const ageFour: number = 12;
// const isMarreid2: boolean = false;
// const arr: Array<string> = ["Ali", "Ahmad"];
// const arrone: number[] = [1, 2, 3, 4, 5];
// const objectOne: { id: number; nameFive: string; isStudent: boolean } = {
//   id: 12,
//   nameFive: "Ali",
//   isStudent: false,
// };
// let student = objectOne.isStudent === false ? "not student" : "student";
// console.log(
//   `My id is ${objectOne.id} and my name is ${objectOne.nameFive} and I'm ${student}`
// );
const b: { id: number; name: string; isstudent: boolean } = {
  id: 123,
  name: "Yaqobi",
  isstudent: true,
};
let s = b.isstudent === false ? " not " : " student ";
console.log(
  `My id number is ${b.id} and my last name is ${b.name} and I'm a ${s}`
);
// // function
// // card 1
// function Gretting(name: string): void {
//   console.log(`Hello, ${name} welcome`);
// }
// Gretting("Murtaza");

// // card 2
// function Numbers(number1: number, number2: number): number {
//   return number1 + number2;
// }
// console.log(Numbers(100, 50));

// // card 3
// function Add(name: string, age?: number): void {
//   console.log(`My name is ${name} and I'm ${age} old!`);
// }
// Add("Murtaza", 17);

// // never
// let result: string;
// function Salaam(name: string, age?: number): never {
//   while (true) {
//     result = "Hi there";
//   }
// }

// // defualt argument 1
// function Greet1(name: string = "Murtaza Yaqobi"): void {
//   console.log(`Hello, I'm ${name} and I'm a student of programming class.`);
// }
// Greet1();

// // defualt argument 2
// function Greet2(
//   className: string,
//   massege: string = "Hello, students today is the first day of engish class"
// ): void {
//   console.log(`${className}: ${massege}`);
// }
// Greet2("Afshar12 ");

// // rested parameter 1
// function Jam(...a: number[]): void {
//   let natija = 0;
//   for (let num of a) {
//     natija += num;
//   }
//   console.log(natija);
// }
// Jam(100, 12, 12, 4, 20, 100);

// // rested parameter 2
// function Manf(...b: number[]): void {
//   let mafiNatija = 0;
//   for (let numManfi of b) {
//     mafiNatija += numManfi;
//   }
//   console.log(mafiNatija);
// }
// Manf(100, 100, 400, 12);

// // in the class
// let g: string;
// function Hi(name: string, age?: number): never {
//   while (true) {
//     g = "Hello world";
//   }
// }

// // enum => عبارت از قیمت های ثابت است که هرگز تغیر نمی کند و یک بار نوشته میکنی و بار ها استفاده میکنی
// // enum use for => group, constant
// enum Colors {
//   red = "Red Color",
//   blue = "Blue Color",
//   black = "Black Color",
//   green = "Green Color",
//   white = "White Color",
//   yellow = "Yellow Color",
//   gray = "Gray Color",
// }
// console.log(Colors.yellow);

// // tuple => like array
// let tupleArr: [string, number, boolean, string] = ["Ali", 17, true, "Male"];
// console.log(tupleArr[3]);
// // 2
// const tupleArr2: [string, string, boolean, number] = [
//   "Mohammad",
//   "Mohammadi",
//   true,
//   17,
// ];
// console.log(tupleArr2[0]);

// function overloading
function zarb(a: number, b: number): number;
function zarb(a: string, b: string): string;
function zarb(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a * b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  throw new Error("Invalid Data Type");
}
console.log(zarb(9, 5));
console.log(zarb("Mohammad ", "Ali"));

// my e.g: of function overloading
// function myEg(z: string, y: string): string;
// function myEg(z: number, y: number): number;
// function myEg(z: string | number, y: string | number): string | number {
//   if (typeof z === "string" && typeof y === "string") {
//     return z + y;
//   }
//   if (typeof z === "number" && typeof y === "number") {
//     return z + y;
//   }
//   throw new Error("Your message is not valid!");
// }
// console.log(myEg(50, 60));
// console.log(myEg("Murtaza", "Yaqobi"));
// console.log(myEg(500, 1000));

// eg: of function overloading
function eg(a1: string, b1: string): string;
function eg(a1: number, b1: number): number;
function eg(a1: string | number, b1: string | number): string | number {
  if (typeof a1 === "string" && typeof b1 === "string") {
    return a1 + b1;
  }
  if (typeof a1 === "number" && typeof b1 === "number") {
    return a1 * b1;
  }
  throw new Error("Here is an new Error");
}
console.log(eg(4, 4));
console.log("Mohammad", "Ali");

// eg: of function overloading 3
function jaghori(hutqol: number, angori: number): number;
function jaghori(hutqol: string, angori: string): string;
function jaghori(
  hutqol: number | string,
  angori: number | string
): number | string {
  if (typeof hutqol === "number" && typeof angori === "number") {
    return hutqol - angori;
  }
  if (typeof hutqol === "string" && typeof angori === "string") {
    return hutqol + angori;
  }
  throw new Error("Function overloading Error!");
}
console.log(jaghori("Murtaza", "Yaqobi"));
console.log(jaghori(100, 300));
console.log(jaghori(100, 45));
console.log(jaghori(100, 45));
console.log(jaghori(100, 45));
console.log(jaghori(100, 45));
