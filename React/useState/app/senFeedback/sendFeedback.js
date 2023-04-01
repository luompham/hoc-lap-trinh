const { useState, useRef } = React
// text(input)
//status
const App = () => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');
    const [feedbacklist, setFeedbacklist] = useState([]);
    const [undobtn, setUndobtn] = useState(false);
    let timeRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')
        await sendFeedback(text)
        setStatus('sent')
        console.log('feedback: ', text)
        setFeedbacklist([...feedbacklist, text])

    }

    function sendFeedback(text) {
        const newFeedback = new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
        return newFeedback
    }

    const handleChangeInput = (value) => {
        setText(value)
        setStatus('typing')
    }

    const handleDlete = (value) => {
        const timerId = setTimeout(() => {
            setFeedbacklist(feedbacklist.filter((item, index) => {
                return index !== value
            }))
        }, 5000)

        timeRef.current = timerId
        setUndobtn(!undobtn)
    }
    console.log('timeRef', timeRef)
    const handleUndo = () => {
        clearTimeout(timeRef.current)
    }

    const form = (
        <form onSubmit={e => handleSubmit(e)}>
            <p>How was your stay at The Prancing Pony?</p>
            <textarea
                disabled={status === 'sending'}
                value={text}
                onChange={e => handleChangeInput(e.target.value)}  ></textarea>
            <br />
            <button
                disabled={status === 'sending'}
                type='submit'>Send feedback</button>
            {status === 'sending' && (<p>Sending...</p>)}
        </form>
    )
    const feedback = <h1>Thanks for feedback!</h1>

    const initialList = { id: 0, title: 'Big Bellies', seen: false }


    let arr = { ...initialList }
    arr.title = 'New title'
    console.log('initialList: ', initialList);
    console.log('arr: ', arr);


    return (
        <>
            <h1>Feedback Page</h1>
            {status === 'sent' ? feedback : form}
            {status === 'typing' && <p>Typing...</p>}
            <p>-----------------------------------------------</p>
            <h1>Feedbak List Page</h1>
            <ul>
                {feedbacklist.map((item, index) => <li key={index}>{item}
                    <span onClick={() => handleDlete(index)}>&times;</span>
                </li>)}
            </ul>
            <div className={!undobtn ? 'undo' : ''} style={{ width: 300, height: 35, backgroundColor: '#c7a4a4' }}>Feedback will be deleted in 5 seconds
                <button
                    onClick={handleUndo}
                    style={{ marginLeft: 5 }}>Undo</button>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)