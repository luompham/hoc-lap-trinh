//DOM Events: gồm có event của trình duyệt (đang tải, đã tải trang,...), event của người dùng (event chuột, bàn phím,...)

//1. Attribute events
// Khi lắng nghe sự kiện ở thẻ cha, và click vào thẻ con sẽ xảy ra sự kiện nổi bọt và cũng sẽ xảy ra sự kiện ở thẻ cha.

//2. Assign events using the element node 

const h1Element = document.querySelectorAll('h1')

for (let i = 0; i < h1Element.length; i++) {
    h1Element[i].onclick = (e) => {
        console.log(e.target);
    }
}

//Input, select events

let valueInput;
const inputElement = document.querySelector('input[type="text"]')
inputElement.oninput = (e) => {
    valueInput = e.target.value;
}

const inputElement2 = document.querySelector('input[type="checkbox"]')
inputElement2.onchange = (e) => {
    console.log(e.target.checked)
}

const selectElement = document.querySelector('select')
selectElement.onchange = (e) => {
    console.log(e.target.value)
}

//Key up/down events
document.onkeydown = (e) => {
    //  console.log(e.key)
    switch (e.key) {
        case 'Escape':
            console.log('EXIT')
            break;

        case 'Enter':
            console.log('SEND CHAT')
            break;
        default:
            break;
    }
}