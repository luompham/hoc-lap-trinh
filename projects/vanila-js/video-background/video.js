
const toggleBtn = document.querySelector('.toggle-button')
let stateBtn = true;
const video = document.querySelector('video')
console.log(video)

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

