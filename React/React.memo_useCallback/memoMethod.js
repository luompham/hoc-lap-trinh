const { useState, memo, useCallback } = React

const ChildComponent = memo(
    ({ handleIncrease }) => {
        return (
            <>
                <h1>This is a Child Component</h1>
                {console.log('re-render')}

                <button onClick={handleIncrease}>Click me</button>

            </>
        )
    }
)

const App = () => {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        return setCount(count + 1)
    }, [count])
    return (
        <>
            <h2>{count}</h2>

            <ChildComponent handleIncrease={handleIncrease} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);