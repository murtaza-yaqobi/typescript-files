// number string boolean array object any
const nameFour: string = "Ali";
const ageFour: number = 12;
const isMarreid2: boolean = false;
const arr: Array<string> = ["Ali", "Ahmad"];
const arrone: number[] = [1, 2, 3, 4, 5];
const objectOne: { id: number; nameFive: string; isStudent: boolean } = {
  id: 12,
  nameFive: "Ali",
  isStudent: false,
};
let student = objectOne.isStudent === false ? "not student" : "student";
console.log(
  `My id is ${objectOne.id} and my name is ${objectOne.nameFive} and I'm ${student}`
);
// function
// card 1
function Gretting(name: string): void {
  console.log(`Hello, ${name} welcome`);
}
Gretting("Murtaza");

// card 2
function Numbers(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(Numbers(100, 50));

// card 3
function Add(name: string, age?: number): void {
  console.log(`My name is ${name} and I'm ${age} old!`);
}
Add("Murtaza", 17);

// never
let result: string;
function Salaam(name: string, age?: number): never {
  while (true) {
    result = "Hi there";
  }
}

// defualt argument 1
function Greet1(name: string = "Murtaza Yaqobi"): void {
  console.log(`Hello, I'm ${name} and I'm a student of programming class.`);
}
Greet1();

// defualt argument 2
function Greet2(
  className: string,
  massege: string = "Hello, students today is the first day of engish class"
): void {
  console.log(`${className}: ${massege}`);
}
Greet2("Afshar12 ");

// rested parameter 1
function Jam(...a: number[]): void {
  let natija = 0;
  for (let num of a) {
    natija += num;
  }
  console.log(natija);
}
Jam(100, 12, 12, 4, 20, 100);

// rested parameter 2
function Manf(...b: number[]): void {
  let mafiNatija = 0;
  for (let numManfi of b) {
    mafiNatija += numManfi;
  }
  console.log(mafiNatija);
}
Manf(100, 100, 400, 12);

// in the class
let g: string;
function Hi(name: string, age?: number): never {
  while (true) {
    g = "Hello world";
  }
}

// enum => عبارت از قیمت های ثابت است که هرگز تغیر نمی کند و یک بار نوشته میکنی و بار ها استفاده میکنی
// enum use for => group, constant
enum Colors {
  red = "Red Color",
  blue = "Blue Color",
  black = "Black Color",
  green = "Green Color",
  white = "White Color",
  yellow = "Yellow Color",
}
console.log(Colors.blue);

// tuple => like array
let tupleArr: [string, number, boolean, string] = ["Ali", 17, true, "Male"];
console.log(tupleArr[3]);
// 2
const tupleArr2: [string, string, boolean, number] = [
  "Mohammad",
  "Mohammadi",
  true,
  17,
];
console.log(tupleArr2[0]);
