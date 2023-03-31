# useReducer() hook
### 1. Vai trò
    Dùng tương tự như useState, nhưng có thể thay thế cho useState nếu dùng cho dự án lớn, quản lý nhiều state.
### 2. Các thành phần
    - InitialState: giá trị state ban đầu.
    - Actions: hành động tương ứng với sự kiện trong DOM.
    - Reducer: là hàm nhận vào 2 tham số, state hiện tại và action. Và dựa vào action sẽ tạo ra state mới tương ứng (kiểu dữ liệu state mới phải đúng với InitialState).
    - useReducer(): là hàm nhận vào 2 tham số, reducer và InitialState. Trả về mảng [state, dispatch]. Trong đó, dispatch(action) là hàm nhận vào action và dùng để kích hoạt sự kiện trong DOM.
### 3. Cách hoạt động

Khi React render sẽ gọi component `App`, useReducer tạo reducer và InitialState và gán InitialState = 0 cho count. Lúc này reducer mới chỉ được tạo, chưa thực thi (console.log trong reducer để kiểm tra).
Khi click nút 'Up' dispatch sẽ gửi action đến reducer, lúc này useReducer sẽ gọi hàm reducer, reducer nhận vào `state` hiện tại là 0 và action là `UP_ACTION` và tương ứng với case `return state + 1` nên kết quả sẽ là 0 + 1 = 1. Trường hợp `DOWN_ACTION` tương tự.


```jsx
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
```
