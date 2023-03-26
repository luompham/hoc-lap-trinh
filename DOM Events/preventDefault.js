//Trường hợp 1
const aElements = document.querySelectorAll('a');

for (let i = 0; i < aElements.length; i++) {

    aElements[i].onclick = (e) => {
        const checkLink = aElements[i].href.includes('f8.edu.vn')
        //nếu thuộc tính href của thẻ a được click không có chuỗi 'f8.edu.vn' 
        //thì sẽ ngăn hành vi mặc định (ko chuyển trang)
        if (!checkLink) {
            e.preventDefault();
        }
    }
}


//Trường hợp 2
//yêu cầu: khi focus vào input thì sẽ hiện ra thẻ ul chứa khóa học, khi nhập tìm khóa học và có thể click vào được thẻ ul bên dưới để chuyển đến khóa học tương ứng
//Do hành vi mặc định khi ta focus vào input và click chuột ra ngoài sẽ làm cho thẻ ul biến mất (display: none của css) nên cần ngăn hành vi mặc định này. 
//Ta sẽ lắng nghe sự kiện onmousedown (khi click chuột xuống thẻ ul)
const ulElement = document.querySelector('ul');
ulElement.onmousedown = (e) => {
    e.preventDefault();
}

ulElement.onclick = (e) => {
    console.log(e.target)
}

