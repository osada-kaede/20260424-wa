// 配列の宣言
let sampleArray = new Array();

// 配列の要素
let fruits = ["りんご","みかん","ぶどう"];

console.log(fruits); //(3) ['りんご', 'みかん', 'ぶどう']

// 卑劣の要素を出力　インデックス（番号）/添字/添え字
console.log(fruits[0]); //りんご

// 配列の要素の追加
fruits.push("バナナ"); //配列の末尾に要素を追加
console.log(fruits); //(4) ['りんご', 'みかん', 'ぶどう', 'バナナ']

fruits.unshift("もも"); //配列の先頭に要素を追加
console.log(fruits); //(5) ['もも', 'りんご', 'みかん', 'ぶどう', 'バナナ']

