let countDOM = document.querySelector("#count");
let count = 0

function decrease() {
    count -= 1
    countDOM.innerHTML = `Count : ${count}`
}

function increase() {
    count += 1
    countDOM.innerHTML = `Count : ${count}`
}