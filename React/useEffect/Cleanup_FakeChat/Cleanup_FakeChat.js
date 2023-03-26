const { useState, useEffect } = React

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

emitComment(1)
emitComment(2)
emitComment(3)

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

  useEffect(() => {

    function handleComment({ detail }) {
      console.log(detail)
    }


    window.addEventListener(`Lesson-${typeBtn}`, handleComment)

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