const btnTabs = document.querySelectorAll('button')
const aboutPage = document.querySelector('.container')


const contents = document.querySelectorAll('.content')


btnTabs.onclick = (e) => {
    const dataId = e.target.dataset.id
    console.log(dataId);




    // btnTabs.forEach(btn => {
    //     if (dataId) {
    //         btn.classList.remove('active');
    //     }
    // }
    // )
    // e.target.classList.add('active');

    // contents.forEach(content => {
    //     content.classList.remove('active');
    // })
    // const contentElement = document.getElementById(dataId)
    // contentElement.classList.add('active');
}

window.addEventListener('load', () => {
    //  console.log(contents.length - 1);
    //  console.log(contents[0].classList.remove('hide-content'));
})