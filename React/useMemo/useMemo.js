const { useState, useMemo, useRef } = React

const Order = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [orders, setOrders] = useState([]);
    const handleChangeName = (value) => {
        setName(value)
    }
    const handleChangePrice = (value) => {
        setPrice(value)
    }

    const nameRef = useRef()

    const handleAdd = () => {
        setOrders(prev => [...prev, {
            name,
            price: +price,
        }])
        setName('');
        setPrice('');

        nameRef.current.focus();
    }

    const total = useMemo(() => {
        const result = orders.reduce((result, curr) => {
            console.log('tính toán lại...')
            return result + curr.price
        }, 0)
        return result
    }, [orders]);


    return (
        <>
            <input
                ref={nameRef}
                value={name}
                onChange={e => handleChangeName(e.target.value)}
                placeholder='enter product name...'
                type="text" />
            <br />
            <input
                value={price}
                onChange={e => handleChangePrice(e.target.value)}
                placeholder='enter product price...'
                type="text" />
            <br />
            <button onClick={handleAdd}>Add</button>
            <br />
            Total:{total}
            <ul>
                {orders.map((item, index) => {
                    return (
                        <li key={index}>{item.name} - {item.price}</li>
                    )
                })}
            </ul>
        </>
    )
}


const App = () => {
    return (
        <>
            <h1>useMemo() Hook</h1>
            <Order />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)