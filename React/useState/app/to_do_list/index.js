
const { useState, useEffect } = React

const Content = () => {

    const [input, setInput] = useState('');

    const [lists, setLists] = useState([]);

    useEffect(() => {
        const parseJobs = JSON.parse(localStorage.getItem('jobs'))
        setLists(parseJobs ?? [])
    }, [])

    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(lists))
    }, [lists])

    const handleChange = (value) => {
        setInput(value)
    };

    const handleClickAdd = () => {
        setLists(prev => {
            const newJobs = [...prev, input]
            return newJobs
        })
        setInput('')
    }


    const handleRemove = () => {
        setLists(() => {
            const restItems = lists.filter((item, index, arr) => item !== arr[0])
            return restItems
        })
    }




    const handleClearAll = () => {
        setLists([])
    }
    return (
        <>
            <h1>useState - To Do List</h1>
            <input
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                type="text" />
            <button onClick={handleClickAdd} style={{ margin: '0px 5px' }}>Add</button>
            <button onClick={handleRemove} style={{ margin: '0px 5px' }}>Remove One</button>
            <button onClick={handleClearAll} style={{ margin: '0px 5px' }}>Clear All</button>
            <ul>
                {lists.map(item =>
                    <li key={item}>{item}</li>
                )}
            </ul>

        </>
    )
}


const App = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <h1>ReactJS</h1>
            <button onClick={handleClick}>Toggle</button>
            <br />
            <br />
            <br />
            {toggle && <Content />}


            {/* <InputComponent /> */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)