const { useState } = React

const orders = [100, 200, 300];

function ChangeInfo() {

    const [info, setInfo] = useState({
        name: 'Luom Pham',
        age: 28,
        address: 'Binh Duong, VN'
    })

    function handleChange() {
        setInfo({
            ...info,
            hobby: 'Listen to music'
        })
    }

    return (
        <>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleChange}>Update info</button>
        </>
    )

}

const App = () => {
    console.log('strict mode')
    const [count, setCount] = useState(() => {
        const total = orders.reduce((total, curr) => {
            return total + curr
        })
        console.log(total)

        return total
    })

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1>useState hook</h1>
            <h2 style={{ color: 'red', padding: 20 }}>{count}</h2>
            <button onClick={handleClick}>Increase</button>
            <br />
            <br />
            <br />
            <br />
            <ChangeInfo />

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);