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
var b = {
    id: 123,
    name: "Yaqobi",
    isstudent: true,
};
var s = b.isstudent === false ? " not " : " student ";
console.log("My id number is ".concat(b.id, " and my last name is ").concat(b.name, " and I'm a ").concat(s));
function zarb(a, b) {
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
function eg(a1, b1) {
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
function jaghori(hutqol, angori) {
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
