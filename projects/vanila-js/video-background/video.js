
const toggleBtn = document.querySelector('.toggle-button')
let stateBtn = true;
const video = document.querySelector('video')
const img = document.querySelector('img')
console.log(img)

toggleBtn.addEventListener('click', () => {
    stateBtn = !stateBtn;
    if (stateBtn) {
        console.log('play')
        video.play();
    } else {
        video.pause();
        console.log('pause')
    }
})

window.addEventListener('load', () => {
    img.classList.add('hide-preload-img')
})
