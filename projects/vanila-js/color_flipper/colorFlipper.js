//green, #F15025, Rgba(133,122,200), red
const colorArr = ['green', 'red', '#F15025', 'Rgba(133,122,200)']
const h1Element = document.getElementsByTagName('h1');
const btnElement = document.querySelector('button')
const length = colorArr.length

h1Element[0].innerHTML =
    `Background Color: ${colorArr[Math.floor(Math.random() * length)]}`
document.body.style.backgroundColor = h1Element[0].innerHTML.slice(18)
btnElement.onclick = () => {
    h1Element[0].innerHTML =
        `Background Color: ${colorArr[Math.floor(Math.random() * length)]}`
    const color = h1Element[0].innerHTML.slice(18)
    console.log({ color });

    document.body.style.backgroundColor = color

}