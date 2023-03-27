const { useState, useEffect, useLayoutEffect } = React

const Content = () => {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

const App = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <h1>useLayoutEffect() Hook</h1>
            <br />

            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <Content />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)