# useRef hook
## Syntax 

```javascript
const ref = useRef(initialValue);
```
## Mục đích: 
- Dùng để lưu giá trị qua 1 tham chiếu bên ngoài
- Các hàm khác có thể nhận được giá trị của 1 biến trong phạm vi 1 hàm khác thông qua `useRef`.
- Hàm `useRef` nhận 1 tham số là giá trị khởi tạo `initialValue`, tham số này có thể là bất kỳ kiểu dữ liệu trong JS.
- Hàm `useRef` trả về 1 `object` có key là `current`

```javascript
const { useState, useRef } = React;
const App = () => {
    const [countDown, setCountDown] = useState(60)

    let myTimerId = useRef(99)

    console.log(myTimerId.current)

    const handleStart = () => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000)

        myTimerId.current = timerId
    }
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
```


## Cách dùng khác:
Kết hợp với `useEffect` dùng để lấy giá trị trước đó và giá trị hiện tại của state.

```javascript
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
    //output is: 59, 60
```