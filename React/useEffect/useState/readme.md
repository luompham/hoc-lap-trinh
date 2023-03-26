# useState hook

### Dùng khi nào?
Khi muốn dữ liệu thay đổi mà muốn giao diện được tự động cập nhật theo dữ liệu
(render lại theo dữ liệu)


```jsx

import {useState} from 'react';

function Component(){
    const [state, setState] =useState(initialState)

    ...
}
```

### Lưu ý
- Component được re-render sau khi `setState`
- Initial state chỉ dùng cho lần đầu
- Set state với callback: khi phải thực hiện nhiều tính toán và dùng giá trị đó cho initial state thì ta truyền callback vào `useState`, vì initial state là giá trị trả về từ callback
- Set state thực chất là thay thế state bằng giá trị mới.

