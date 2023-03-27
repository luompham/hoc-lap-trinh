# useEffect hook

### Lưu ý
Có 3 trường hợp: cả 3 trường hợp đều "Gọi callback sau khi component thêm element vào DOM -mounted".
- TH1: useEffect(callback) nhận 1 đối số là callback
    + Gọi callback sau khi component  thêm element vào DOM
    + Luôn gọi callback  mỗi khi component re-render

- TH2: useEffect(callback, [])
Chỉ gọi callback 1 lần sau khi component mounted. 
Dùng khi muốn thực hiện logic 1 lần sau khi component được mounted, và ko muốn gọi lại khi component re-render.
=> Thường áp dụng gọi API 1 lần.

- TH3: useEffect(callback, [dependencies])
Callbalk sẽ được gọi lại mỗi khi dependencies thay đổi.
=> useEffect sẽ kiểm tra dependency trước và sau khi render có khác nhau ko, nếu khác nhau sẽ gọi lại callback, `useEffect` dùng toán tử `===` để so sánh.


# Cleanup function

- Luôn được gọi trước khi component unmounted.
- Luôn được gọi trước khi callback được gọi (trừ lần đầu component được mounted).
Đây là hàm được return trong callback của useEffect. Dùng để dọn dẹp những dữ liệu ko dùng nữa trong bộ nhớ khi ta unmounted component, tránh gây rò rỉ bộ nhớ.
 
 ```js
 useEffect(() => {
        const scrollHandle = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 200) {
                //show
                setShowGoToTop(true)
            } else {
                //hide
                setShowGoToTop(false)
            }
            // setShowGoToTop(window.scrollY>=200)
        }
        window.addEventListener('scroll', scrollHandle);
//Cleanup function
        return ()=>{ }

    }, []);
 ```

 # Concepts when resolve the problems

    1. Làm thế nào giải bài toán.
    2. Vấn đề gặp phải khi giải quyết bài toán.
    3. Cách khắc phục.
