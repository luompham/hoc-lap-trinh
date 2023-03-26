const { useState, useEffect } = React;

const Content = () => {
  const [avatar, setAvatar] = useState();
  useEffect(() => {

    //cleanup xóa ảnh cũ khỏi bộ nhớ
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)

    }
  }, [avatar])

  const handleChange = (e) => {
    const file = e.target.files[0]
    console.log(URL.createObjectURL(file))
    //thêm thuộc tính preview cho object file
    file.preview = URL.createObjectURL(file)
    //set lại state cho avatar = file
    setAvatar(file)
  }

  return (
    <>
      <div>
        <input
          type="file"
          onChange={handleChange}
        />

      </div>

      <div>
        {avatar && (
          //sau khi set lại state cho avatar thì có thể truy cập vào url = avatar.preview
          <img src={avatar.preview} alt='image' />
        )}
      </div>
    </>
  )
}


const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1>Cleanup Function of useEffect</h1>
      <button
        onClick={() => setShow(!show)}
      >Toggle</button>

      {show && (
        <Content />
      )}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);