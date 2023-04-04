const btnTab = document.querySelector('.tab-button')

const content = document.querySelectorAll('.content')

//console.log(content[0].id);

btnTab.onclick = (e) => {
    console.log(e.target.dataset.id);

    console.log(typeof content);
    // content.filter(item => {
    //     console.log(item);
    // })
}