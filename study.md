# ReactJS (UI)
## 1. Component
    Chia UI thành những thành phần nhỏ, có thể tái sử dụng
## 2. Props
    Truyền dữ liệu từ component cha xuống component con
## 3. Conditional rendering 
    if statements, &&, and ? : operators.
## 4. Rendering lists 
    Dùng filter(), map() để chuyển đổi mảng dữ liệu thành mảng của component
## 5. Render & Commit
### Cách hoạt động
    Trước khi component được hiển thị trên màn hình, chúng phải được React "Render". Quá trình nhận yêu cầu và cập nhật lại giao diện có 3 bước: Triggering a render, Rendering the component, Commiting to the DOM.
#### Step 1: Trigger a render
    - Initial render
    - State changed
#### Step 2: Rendering the component
    Call component and figure out what 
#### Step 3: Commiting to the DOM

## 6. State
    Quản lý trạng thái của component. Là bộ nhớ của component, dùng để lưu giữ thông tin của component và gửi thông tin đó cho web server.
## 7. Hook
### memo() method
    Giúp xử lý component để tránh bị re-render khi không cần thiết. memo() method lắng nghe props (chỉ là kiểu dữ liệu tham trị) của Component, không có hiệu quả khi props là kiểu dữ liệu tham chiếu.
### useCallback() hook
    Giải quyết vấn đề của memo() method. Dùng cho những event handlers tránh render lại component ko cần thiết (dùng kết hợp với memo() method).
### useRef() hook
    - Dùng để lưu giá trị qua 1 tham chiếu bên ngoài
    - Các hàm khác có thể nhận được giá trị của 1 biến trong phạm vi 1 hàm khác thông qua `useRef`.
    - Có thể ứng dụng lấy DOM element node.
### useEffect() hook
### useLayoutEffect() hook
### useMemo() hook
### useRef() hook
### useRef() hook






# Redux (manage state)
# MongoDB (database)
# Express (backend)
# Bootstrap (css)


user : customer
React: waitor
Component: cooker