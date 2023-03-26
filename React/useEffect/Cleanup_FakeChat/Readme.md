### Cleanup of useEffect's callback function
# Ứng dụng làm chức năng comment

1. Tạo hàm xử lý việc phát sự kiện, tạo trên đối tượng `window` nên toàn bộ trang web sẽ nhận được sự kiện.
Do có nhiều kênh khác nhau cần nhận events, và mỗi kênh cần phải chỉ nhận nội dung của `emitComment` tương ứng ở kênh đó. Do đó sẽ dựa vào `id` của dữ liệu để tạo tên sự kiện.

```javascript
//Fake comments
function emitComment(id) {
  setInterval(function () {
    window.dispatchEvent(
      new CustomEvent(`Lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}
// Emit events
emitComment(1)
emitComment(2)
emitComment(3)

```

2. Xử lý sự kiện trong `useEffect`. Dữ liệu lấy từ `courses`, dựa vào `id` của courses để nhận sự kiện tương ứng.

```jsx

const courses = [
  {
    id: 1,
    title: 'React JS'
  },
  {
    id: 2,
    title: 'Node JS'
  },
  {
    id: 3,
    title: 'Redux'
  },
]

const Content = () => {
  const [typeBtn, setTypeBtn] = useState(1)
  //Xử lý sự kiện trong useEffect
  useEffect(() => {

    function handleComment({ detail }) {
      console.log(detail)
    }
    window.addEventListener(`Lesson-${typeBtn}`, handleComment)

    //Sau khi unmounted (users rời khỏi màn hình hiện tại) sẽ xóa (dọn dẹp) sự kiện đã xảy ra trước đó để tránh rò rỉ bộ nhớ
    return () => {
      window.removeEventListener(`Lesson-${typeBtn}`, handleComment)

    }

  }, [typeBtn])
  return (

    <>
      <ul>
        {courses.map(course => {
          return (
            <li
              style={typeBtn === course.id ? { color: 'red' } : { color: 'black' }}
              key={course.id}
              onClick={() => setTypeBtn(course.id)}
            >
              {course.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}


const App = () => {

  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle)
  }
  return (
    <>
      <h1>Fake Chat App</h1>
      <button onClick={handleToggle}>Toggle</button>
      <br />
      <br />
      <br />
      <div>
        {toggle && <Content />}
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```