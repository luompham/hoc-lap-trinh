fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        //dữ liệu trả về đã được parse thành JavaScript Types
        return response.json();
    })
    .then((datas) => {
        let arrayHtml = datas.map((data) => {
            return (
                `<li>
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            </li>`
            )
        })

        let html = arrayHtml.join('')
        //console.log(Array.isArray(arrayHtml))

        const ulElement = document.querySelector('ul')
        ulElement.innerHTML = html
    })


