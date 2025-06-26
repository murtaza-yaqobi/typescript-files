// number string boolean array object any
var nameFour = "Ali";
var ageFour = 12;
var isMarreid2 = false;
var arr = ["Ali", "Ahmad"];
var arrone = [1, 2, 3, 4, 5];
var objectOne = {
    id: 12,
    nameFive: "Ali",
    isStudent: false,
};
var student = objectOne.isStudent === false ? "not student" : "student";
console.log("My id is ".concat(objectOne.id, " and my name is ").concat(objectOne.nameFive, " and I'm ").concat(student));
// function
// card 1
function Gretting(name) {
    console.log("Hello, ".concat(name, " welcome"));
}
Gretting("Murtaza");
// card 2
function Numbers(number1, number2) {
    return number1 + number2;
}
console.log(Numbers(100, 50));
// card 3
function Add(name, age) {
    console.log("My name is ".concat(name, " and I'm ").concat(age, " old!"));
}
Add("Murtaza", 17);
// never
var result;
function Salaam(name, age) {
    while (true) {
        result = "Hi there";
    }
}
// defualt argument 1
function Greet1(name) {
    if (name === void 0) { name = "Murtaza Yaqobi"; }
    console.log("Hello, I'm ".concat(name, " and I'm a student of programming class."));
}
Greet1();
// defualt argument 2
function Greet2(className, massege) {
    if (massege === void 0) { massege = "Hello, students today is the first day of engish class"; }
    console.log("".concat(className, ": ").concat(massege));
}
Greet2("Afshar12 ");
// rested parameter 1
function Jam() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var natija = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var num = a_1[_a];
        natija += num;
    }
    console.log(natija);
}
Jam(100, 12, 12, 4, 20, 100);
// rested parameter 2
function Manf() {
    var b = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        b[_i] = arguments[_i];
    }
    var mafiNatija = 0;
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var numManfi = b_1[_a];
        mafiNatija += numManfi;
    }
    console.log(mafiNatija);
}
Manf(100, 100, 400, 12);
// in the class
var g;
function Hi(name, age) {
    while (true) {
        g = "Hello world";
    }
}
// enum => عبارت از قیمت های ثابت است که هرگز تغیر نمی کند و یک بار نوشته میکنی و بار ها استفاده میکنی
// enum use for => group, constant
var Colors;
(function (Colors) {
    Colors["red"] = "Red Color";
    Colors["blue"] = "Blue Color";
    Colors["black"] = "Black Color";
    Colors["green"] = "Green Color";
    Colors["white"] = "White Color";
    Colors["yellow"] = "Yellow Color";
})(Colors || (Colors = {}));
console.log(Colors.blue);
// tuple => like array
var tupleArr = ["Ali", 17, true, "Male"];
console.log(tupleArr[3]);
// 2
var tupleArr2 = [
    "Mohammad",
    "Mohammadi",
    true,
    17,
];
console.log(tupleArr2[0]);
