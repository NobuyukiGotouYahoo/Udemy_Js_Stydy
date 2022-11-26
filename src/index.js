/**
 * const let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

let val2 = "let変数";
console.log(val2);

val2 = "内容書き換え";
console.log(val2);

const valObejct = {
  name: "ゴトウ",
  age: 24
};

console.log(valObejct);

console.log(valObejct.name);
console.log(valObejct.age);

valObejct.age = 27;

console.log(valObejct.age);

const valArray = ["dog", "cat"];
console.log(valArray);
console.log(valArray[0]);

valArray[0] = "monky";
valArray[1] = "cow";
console.log(valArray);
console.log(valArray[0]);

const mesageTemplate = `テンプレート機能を使用しています.\n 名前は${valObejct.name}です。\n 年齢は${valObejct.age}です。`;
console.log(mesageTemplate);

const { name, age } = valObejct;
const mesageTemplate2 = `テンプレート機能を使用しています。\n 名前は${name}です。\n 年齢は${age}です。`;
console.log(mesageTemplate2);
