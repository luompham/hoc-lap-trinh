const { useState, memo, useCallback } = React

const ChildComponent = memo(
    ({ onIncrease }) => {
        return (
            <>
                <h1>This is a Child Component</h1>
                {console.log('re-render')}

                <button onClick={onIncrease}>Click me</button>

            </>
        )
    }
)

const App = () => {
    const [count, setCount] = useState(0)
    const handleIncrease = useCallback(() => {
        return setCount(prev => prev + 1)
    }, [])
    return (
        <>
            <h2>{count}</h2>

            <ChildComponent onIncrease={handleIncrease} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);