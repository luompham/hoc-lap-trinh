# useMemo hook
## Syntax: 
```jsx
const cachedValue = useMemo(calculateValue, dependencies);
```
## Vai trò:
Dùng để ngăn việc lặp lại (re-render) những logic, tính toán không cần thiết, tăng hiệu năng ứng dụng.

```javascript
 const total = useMemo(() => {
        const result = orders.reduce((result, curr) => {
            console.log('tính toán lại...')
            return result + curr.price
        }, 0)
        return result
    }, [orders]);

```