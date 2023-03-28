const { useState, useRef, useEffect } = React


const App = () => {
    const [countDown, setCountDown] = useState(60)

    let myTimerId = useRef()
    let prevCount = useRef()

    useEffect(() => {
        prevCount.current = countDown
    }, [countDown])


    const handleStart = () => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000)

        myTimerId.current = timerId
    }

    console.log(countDown, prevCount.current);

    const handleStop = () => {
        clearInterval(myTimerId.current)
    }
    return (
        <>
            <h1>Start and Stop count down</h1>
            <h2 style={{ marginLeft: 10 }}>{countDown}</h2>
            <button onClick={handleStart} style={{ marginRight: 10 }}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)