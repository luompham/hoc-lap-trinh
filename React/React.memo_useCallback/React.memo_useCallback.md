# React.memo() HOC - Higher Order Component
1. Cách dùng:
- Có thể dùng với funcion component và class component
- Đây là function bậc cao nên khi dùng sẽ wrap (bao bọc) lấy `React component`.
- Giúp xử lý component để tránh bị render khi không cần thiết
    + Hàm này sẽ ghi nhớ các `props` của component và kiểm tra xem props trước và sau khi render có thay đổi không.
    + Nếu props không thay đổi thì ko render và ngược lại

```javascript
import {memo} from 'react'

function App(){
    return(
        ...
    )
}

export default memo(App);
```
Or 

```js
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
);

const App = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <ChildComponent />
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```
