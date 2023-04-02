const decreaseBtn = document.getElementById('decrease')
const increaseBtn = document.getElementById('increase')
const resetBtn = document.getElementById('reset')
const toggleBtn = document.querySelector('.toggle-btn')
const divCounter = document.querySelector('.counter')

console.log(divCounter);

let showCounter = false
let counter = 0
const h1Element = document.getElementById('counter')
h1Element.innerHTML = counter

decreaseBtn.onclick = () => {
    counter = counter - 1
    h1Element.innerHTML = counter
    if (counter < 0) {
        h1Element.style.color = 'red'
    }
}

resetBtn.onclick = () => {
    counter = 0
    h1Element.innerHTML = counter
    h1Element.style.color = 'black'

}

increaseBtn.onclick = () => {
    counter = counter + 1
    h1Element.innerHTML = counter
    if (counter > 0) {
        h1Element.style.color = 'green'
    }
}

if (!showCounter) {
    divCounter.remove()
}


toggleBtn.onclick = () => {
    showCounter = !showCounter
    if (showCounter) {
        // divCounter.style.display = 'block'
        document.body.appendChild(divCounter)

    } else {
        //  divCounter.style.display = 'none'
        divCounter.remove()

    }

}






