// 太郎さん用のTestScoreExtendedを使ってデータ表示
let taro = new TestScoreExtended("太郎", 92, 87, 74, 81, 79);
let total3 = taro.calcSum();
console.log("3教科の合計: " + total3);
taro.printScore();