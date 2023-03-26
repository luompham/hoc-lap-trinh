const { useState, useEffect } = React;

const Content = () => {
    const [count, setCount] = useState(1);
    useEffect(() => {
        console.log(`mounted or re-render lần ${count} `)

        return () => {
            console.log(`Cleanup lần ${count} `)

        }
    }, [count])
    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        </>
    )
}


const App = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <h1>Cleanup Function of useEffect</h1>
            <button
                onClick={() => setShow(!show)}
            >Toggle</button>

            {show && (
                <Content />
            )}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);