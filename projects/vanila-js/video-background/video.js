const video = document.querySelector('video')

const btn = document.querySelector('.switch-button')

const img = document.querySelector('.preload-img')

console.log(img);

btn.addEventListener('click', () => {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slide')
        video.pause()
    } else {
        btn.classList.remove('slide')
        video.play()
    }
})


//fake slow network
setTimeout(() => {
    img.classList.add('hide-preload-img')
    // img.classList.add('loading-page')

}, 1000)

//sau khi tải toàn bộ dữ liệu trang (gồm css file, images, video), thì ẩn preload image.
// window.addEventListener('load', () => {
//     img.classList.add('hide-preload-img')
// })


