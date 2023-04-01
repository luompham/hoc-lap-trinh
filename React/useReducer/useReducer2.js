const { useReducer, useRef } = React
const initState = {
    job: '',
    jobs: [],
}

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    }
}

const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    }
}

const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    }
}

const reducer = (state, action) => {
    console.log({ action })
    console.log('prevState', state)

    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:

            newState = {
                ...state,
                jobs: state.jobs.filter((item, index) => index !== action.payload)
            }
            break
        default:
            throw new Error('Invalid action.')



    }

    console.log('newState', newState)

    return newState
}


const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { job, jobs } = state
    const inputRef = useRef();

    console.log(inputRef)
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <>
            <h1>useReducer 2</h1>
            <input

                value={job}
                onChange={e => dispatch(setJob(e.target.value))}
                placeholder="enter jobs..."
                type="text"
                ref={inputRef} />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (

                    <li key={index}>{job}
                        <button onClick={() => dispatch(deleteJob(index))}>&times;</button>
                    </li>

                ))}
            </ul>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)