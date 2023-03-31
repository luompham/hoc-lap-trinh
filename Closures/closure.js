const containerElement = document.getElementById('container')
const h1Element = document.createElement('h1')
h1Element.innerHTML = 'Closure'
containerElement.appendChild(h1Element)

const handleChangeFontSize = (value) => {
    return function () {
        document.body.style.fontSize = `${value}px`
    }
}

const size12 = handleChangeFontSize(12)
const size14 = handleChangeFontSize(14)
const size16 = handleChangeFontSize(16)

const btnElement12 = document.getElementById('btnID-12')
const btnElement14 = document.getElementById('btnID-14')
const btnElement16 = document.getElementById('btnID-16')



btnElement12.onclick = size12
btnElement14.onclick = size14
btnElement16.onclick = size16

