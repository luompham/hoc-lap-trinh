// select element nodes
const form = document.querySelector('form.grocery-form');
const input = document.querySelector('input#grocery');
const submitBtn = document.querySelector('button.submit-btn');
const list = document.querySelector('div.grocery-list')
const alert = document.querySelector('p.alert')

//edit options
let editElement;
let editFlag = false;
let editId = '';

// handle form
form.addEventListener('submit', addItem);


//****functions****  
function addItem(e) {
    e.preventDefault();
    const value = input.value
    const id = new Date().getTime().toString();
    if (value && !editFlag) { console.log('add new item'); }
    else if (value && editFlag) { console.log('edit item'); }
    else { alert.textContent = 'Empty value' }
}

// video 6:42
