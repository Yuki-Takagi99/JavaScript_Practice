// 太郎さん用のTestScoreWithConstructorを使ってデータ表示
let taro = new TestScoreWithConstructor("太郎", 92, 87, 74);
taro.printScore();

// 花子さん用のTestScoreWithConstructorを使ってデータ表示
let hanako = new TestScoreWithConstructor("花子", 79, 95, 83);
hanako.printScore();

// hanakoオブジェクトのscienceプロパティに89を代入
hanako.science = 89;
// hanakoオブジェクトのscienceプロパティを表示
console.log("花子さんの理科の点: " + hanako.science);
// taroオブジェクトのscienceプロパティを表示
console.log("太郎さんの理科の点: " + taro.science);
