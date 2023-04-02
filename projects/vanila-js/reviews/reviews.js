const listReviews = [
    {
        fullName: 'Susan Smith',
        position: 'WEB DEVELOPER',
        content: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg'
    },
    {
        fullName: 'Anna Johnson',
        position: 'WEB DESIGNER',
        content: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg'
    },
    {
        fullName: 'Peter Jones',
        position: 'INTERN',
        content: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg'
    },
    {
        fullName: 'Bill Anderson',
        position: 'THE BOSS',
        content: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'
    },
];

const wrapperElement = document.querySelector('.review-wrapper');

const imgElement = wrapperElement.children[0]
const nameElement = wrapperElement.children[1]
const posElement = wrapperElement.children[2]
const contentElement = wrapperElement.children[3]

const randomBtn = document.querySelector('button')
const spanElement = document.querySelectorAll('span')
const lessBtn = spanElement[0]
const largeBtn = spanElement[1]

let currentItem = 0;
function setInnerHTML(index) {
    imgElement.src = listReviews[index].image;
    nameElement.innerHTML = listReviews[index].fullName
    posElement.innerHTML = listReviews[index].position
    contentElement.innerHTML = listReviews[index].content
}


//initial state
window.addEventListener('DOMContentLoaded', () => {
    setInnerHTML(currentItem)
})

//button clicked
randomBtn.addEventListener('click', () => {
    length = listReviews.length;
    setInnerHTML(Math.floor(Math.random() * length))
    console.log(Math.floor(Math.random() * length))
})


largeBtn.onclick = () => {
    currentItem++
    if (currentItem > listReviews.length - 1) {
        currentItem = 0

    }
    setInnerHTML(currentItem)
}


lessBtn.onclick = () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = listReviews.length - 1
    }
    setInnerHTML(currentItem)
}