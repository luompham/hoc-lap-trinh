const { useState, memo } = React

const ChildComponent = memo(
    () => {
        return (
            <>
                <h1>memo method</h1>
                <h1>This is a Child Component</h1>
                {console.log('re-render')}
            </>
        )
    }
)

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <ChildComponent />
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);