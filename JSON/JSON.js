//JSON : là 1 định dạng dữ liệu (chuỗi)
//Có thể biến String, Number, Boolean, null, Array, Object thành JSON

//Parse: từ chuỗi JSON thành JavaScript Types 
//Stringify: từ JavaScript Types thành JSON



//1.Parse: từ chuỗi JSON thành JavaScript Types 

//Number
let a = '1'
//console.log(typeof JSON.parse(a))

//String
let b = '"abc"'
//console.log(JSON.parse(b))

//Object
let obj = '{"name":"Luom Pham", "age":28}'
//console.log(JSON.parse(obj))

//Array
let arr = '["Javascript", "PHP"]'
//console.log(JSON.parse(arr))


//2. Stringify: từ JavaScript Types thành JSON

// console.log(JSON.stringify([
//     'JavaScript',
//     'PHP',
// ]))


console.log(JSON.stringify({
    name: 'Luom Pham',
    age: 28,
}))


