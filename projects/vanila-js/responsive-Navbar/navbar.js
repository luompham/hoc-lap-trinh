const navListElement = document.querySelector('.nav-list')

const navBtn = document.querySelector('.btn-toggle')

console.log(navListElement.classList.contains('show-links'));



let isClickBtn = false

navBtn.onclick = () => {

    navListElement.classList.toggle('show-links')
    navBtn.classList.toggle('btn-toggle-hover')

    // isClickBtn = !isClickBtn
    // if (isClickBtn) {
    //     navListElement.classList.add('show-links');

    // } else {
    //     navListElement.classList.remove('show-links');

    // }
}






