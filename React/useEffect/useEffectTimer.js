const { useState, useEffect } = React;

const Content = () => {
    const [countDown, setCountDown] = useState(180);
    useEffect(() => {
        const timerId = setInterval(function () {
            setCountDown(prevState => prevState - 1)
            console.log('countDown: ', countDown)
        }, 1000)


        return () => {
            clearInterval(timerId)
            console.log('clearInterval')
        }
    }, [])

    return (
        <>
            <h1>{countDown}</h1>
        </>
    )
}


const App = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => {
                    setToggle(!toggle)
                }}>Toggle</button>
                {toggle && (
                    <Content />
                )}
            </div>
        </>
    )

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
