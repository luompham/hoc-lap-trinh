const menu = [
    {
        id: 1,
        name: 'Buttermilk Pancakes',
        price: 15.99,
        text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg',
        type: 'breakfast',
    },
    {
        id: 1,
        name: 'Buttermilk Pancakes',
        price: 15.99,
        text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg',
        type: 'breakfast',
    },
    {
        id: 2,
        name: 'Diner Double',
        price: 13.99,
        text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg',
        type: 'lunch',
    },
    {
        id: 3,
        name: 'Godzilla Milkshake',
        price: 17.88,
        text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg',
        type: 'shakes',
    },
    {
        id: 4,
        name: 'Country Delight',
        price: 20.99,
        text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut.",
        img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg',
        type: 'dinner',
    },


]

const sectionElement = document.querySelector('section')

const menuBtn = document.querySelector('.menu-button')

window.addEventListener('DOMContentLoaded', () => {
    renderMenu(menu);
    renderButton();
})


//function renderButton
function renderButton() {
    const categories = menu.reduce((category, currVal) => {
        if (!category.includes(currVal.type)) {
            category.push(currVal.type)
        }
        return category
    }, ['all'])

    const itemBtn = categories.map(item => {
        return `<button data-id=${item}>${item}</button>`
    }).join('')

    menuBtn.innerHTML = itemBtn

    const itemBtnArray = document.querySelectorAll('button')

    itemBtnArray.forEach(item => {

        item.onclick = () => {
            const category = item.dataset.id;
            const sort = menu.filter(item => item.type === category)
            if (category === 'all') {
                renderMenu(menu)
            } else {
                renderMenu(sort)
            }
        }
    })
}


// const allBtn = menuBtn[0]
// const breakfastBtn = menuBtn[1]
// const lunchBtn = menuBtn[2]
// const shakesBtn = menuBtn[3]
// const dinnerBtn = menuBtn[4]


// breakfastBtn.onclick = () => {
//     const item = menu.filter(item => item.type === 'breakfast')
//     renderMenu(item)
// }

// lunchBtn.onclick = () => {
//     const item = menu.filter(item => item.type === 'lunch')
//     renderMenu(item)
// }

// shakesBtn.onclick = () => {
//     const item = menu.filter(item => item.type === 'shakes')
//     renderMenu(item)
// }

// dinnerBtn.onclick = () => {
//     const item = menu.filter(item => item.type === 'dinner')
//     renderMenu(item)
// }

// allBtn.onclick = (e) => {
//     console.log(allBtn.dataset.id);

//     renderMenu(menu)
// }


function renderMenu(array) {
    let displayMenu = array.map(item => {

        return `
    <div class="menu-body">
        <div class="menu-item d-flex">
            <img src=${item.img} alt="menu">
            <div class="mg-5">
                <h3>${item.name}</h3>
                <h4>${item.price}</h4>
                <p>${item.text}</p>
            </div>
        </div>
    </div>`
    })

    displayMenu = displayMenu.join('')

    sectionElement.innerHTML = displayMenu
}