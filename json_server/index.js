fetch('http://localhost:3000/products')
    .then(function (response) {
        return response.json()
    })
    .then(function (datas) {
        const arrHTML = datas.map((data) => {
            return (
                `<li>
                <h2> ${data.name}</h2>
                <p>Price: ${data.price}</p>
                <p>Color: ${data.color}</p>
                </li>`
            )
        })

        const htmlData = arrHTML.join('')
        document.querySelector('ul').innerHTML = htmlData


    })

