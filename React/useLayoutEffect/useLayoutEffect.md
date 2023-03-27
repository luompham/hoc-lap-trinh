# useLayoutEffect() Hook
## Phân biệt useEffect vs useLayoutEffect
### useEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated) - sửa lại thuộc tính trong Element node.
3. Render lại UI
4. Gọi `Cleanup function` nếu deps thay đổi
5. Gọi `useEffect callback` function

### useLayoutEffect
1. Cập nhật lại state
2. Cập nhật DOM (mutated) - sửa lại thuộc tính trong Element node.
3. Gọi `Cleanup function` nếu deps thay đổi (sync)
4. Gọi `useLayoutEffect callback` function (sync)
5. Render lại UI

```js
const { useState, useEffect, useLayoutEffect } = React

const Content = () => {
    const [count, setCount] = useState(0)
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleClick}>Click me</button>
        </>
    )
}

const App = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <h1>useLayoutEffect() Hook</h1>
            <br />

            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <Content />}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
```
