//Phân tích:
//1. initial 
//2. actions
//3. reducer
//4. dispatch

const { useReducer } = React

//initial state
const initialState = 0;
const UP_ACTION = 'up';

//actions
const DOWN_ACTION = 'down';

//reducer
const reducer = (state, action) => {
    console.log('reducer');
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action');
    }
}

const App = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>useReducer() hook</h1>
            <h2>{count}</h2>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up</button>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)