const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World";

// document.querySelector("html").addEventListener("click", function () {
//     alert("痛っ！つつかないで！")
// })

// パーソナライズされた挨拶メッセージの追加
let myButton = document.querySelector("button");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla はカッコ良いよ、${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}
function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName)
    myHeading.textContent = `Mozilla かっこいいよ、${myName} さん、Mozilla はかっこいいよ😎`
    }
} 