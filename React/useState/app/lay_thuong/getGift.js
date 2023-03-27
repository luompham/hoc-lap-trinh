const { useState } = React

const gifts = [
    'CPU i9',
    'Ram 32GB RGB',
    'RGB Keyboard'
]

const App = () => {
    const [getGift, setGetGift] = useState()
    console.log(getGift)

    function handleClick() {

        setGetGift(gifts[Math.floor(Math.random() * 3)])
    }

    return (
        <>
            <h1>{getGift || 'Chưa có phần thưởng'}</h1>
            <br />
            <br />
            <button onClick={handleClick}>Lấy thưởng</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);