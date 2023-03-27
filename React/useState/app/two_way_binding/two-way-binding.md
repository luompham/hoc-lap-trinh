# Two way binding 
- Khi nhập dữ liệu vào input (UI thay đổi) làm thay đổi dữ liệu (state thay đổi) nhưng khi thay đổi state (dữ liệu thay đổi) mà UI không thay đổi (dữ liệu trên input ko thay đổi) thì đó là One-way bingding.

-  Khi nhập dữ liệu vào input (UI thay đổi) làm thay đổi dữ liệu (state thay đổi) VÀ khi thay đổi state (dữ liệu thay đổi) VÀ UI cũng THAY ĐỔI theo dữ liệu (state) thì đó là Two-way bingding.

=> Set value cho `input` bằng state sẽ trở thành Two-way bingding.

- Ứng dụng: dùng xử lý form (input, radio, checkbox)

```js
//Tw0-way bingding
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
```

## With Input

## With Radio 
### Chỉ chọn 1 item trong nhiều items:
- Khi checked cần biết được item nào được checked nên sẽ lấy id của item đó làm state.
- So sánh state và props `key = id`, nếu bằng nhau (kết quả trả về là `true`) thì mới cho checked. 
```js
   <input
    type="radio" 
    checked={checked === course.id}
    onChange={() => setChecked(course.id)} 
   />
```
- Khi submit form có input là `type="radio" ` thì cần gửi đi state (do state chứa id của item đã checked), kết quả ta sẽ lấy được id của item gửi lên server.

```js
    const handleFormSubmit = () => {
        console.log({ id: checked })
    }
    
    ...

     <button style={{ margin: 5 }}
                onClick={handleFormSubmit}
            >Register</button>
```

## With Checkbox 
