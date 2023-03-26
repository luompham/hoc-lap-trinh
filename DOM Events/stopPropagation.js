document.querySelector('div').onclick =
    () => {
        console.log('DIV')
    }

document.querySelector('button').onclick =
    (e) => {
        e.stopPropagation()
        console.log('Click me')
    }