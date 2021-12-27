
let nume = "测试哈哈哈";
const aa = { name: "tom", age: 19, sex: "nan" };
const delay = new Promise(resolve => console.log("这是新new出来的Promise函数"));
console.log(delay);


//Generator函数
function* qwe() {
    yield "hello";
    yield "my";
    yield "world"

}
let nana = new qwe();
console.log(nana.next());