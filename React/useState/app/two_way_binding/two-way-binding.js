const { useState } = React

const courses = [
    {
        id: 1,
        name: 'ReactJS',
    },
    {
        id: 2,
        name: 'NodeJS',
    },
    {
        id: 3,
        name: 'HTML, CSS',
    },
]

const Input = () => {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    function handleClick() {
        console.log({ name, mail })
    }
    return (
        <>
            <h1>Two way binding with <strong style={{ color: 'red' }}>Input</strong></h1>
            Name <input value={name} onChange={e => setName(e.target.value)} type="text" />
            <br />
            <br />
            Mail <input value={mail} onChange={e => setMail(e.target.value)} type="text" />
            <br />
            <br />
            <button onClick={handleClick}>Register</button>
        </>
    )
}

const Radio = () => {
    const [checked, setChecked] = useState(1)

    const handleFormSubmit = () => {
        console.log({ id: checked })
    }

    return (
        <>
            <h1>Two way binding with <strong style={{ color: 'red' }}>Radio</strong></h1>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input type="radio" checked={checked === course.id} onChange={() => setChecked(course.id)} />{course.name} <br />
                    </div>
                )
            })}
            <button style={{ margin: 5 }}
                onClick={handleFormSubmit}
            >Register</button>
        </>
    )
}

const Checkbox = () => {
    const [checked, setChecked] = useState([])

    // console.log(checked)

    const handleChangeCheckBox = (ids) => {
        setChecked(() => {
            //nếu mảng state đã có id đó rồi (đã checked) mà lại checked thì sẽ bỏ check id đó 
            if (checked.includes(ids)) {

                return checked.filter(id => id !== ids)

            } else {
                return [...checked, ids]
            }
        })
    }

    const handleSubmit = () => {
        console.log(checked)
    }
    return (
        <>
            <h1>Two way binding with <strong style={{ color: 'red' }}>Input</strong></h1>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <input
                            checked={checked.includes(course.id)}
                            onChange={() => handleChangeCheckBox(course.id)}
                            type="checkbox" />
                        {course.name}
                        <br />
                    </div>
                )
            })
            }

            <button onClick={handleSubmit}>Submit</button>
        </>
    )

};

const App = () => {
    const [input, setInput] = useState(false)
    const [radio, setRadio] = useState(false)
    const [checkbox, setCheckbox] = useState(false)

    return (
        <>
            <button onClick={() => setInput(!input)}
                style={{ margin: 5 }}>Show Input</button>

            <button onClick={() => setRadio(!radio)}
                style={{ margin: 5 }}>Show Radio</button>

            <button onClick={() => setCheckbox(!checkbox)}
                style={{ margin: 5 }}>Show Checkbox</button>
            <br />
            <br />
            {input && <Input />}
            {radio && <Radio />}
            {checkbox && <Checkbox />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);