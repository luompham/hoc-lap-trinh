// select element nodes
const form = document.querySelector('form.grocery-form');
const input = document.querySelector('input#grocery');
const containerGrocery = document.querySelector('div.grocery-container')
const submitBtn = document.querySelector('button.submit-btn');
const list = document.querySelector('div.grocery-list')
const alert = document.querySelector('p.alert');

const clearAllItemsBtn = document.querySelector('button.clear-btn')



//edit options
let editElement;
let editFlag = false;
let editId = '';

// handle form
form.addEventListener('submit', addItem);
clearAllItemsBtn.addEventListener('click', clearAllItem)

//load list from local storage
window.addEventListener('DOMContentLoaded', () => {
    const items = getListFromLocalStorage();
    console.log('DOMContentLoaded: ', items);
    if (items.length > 0) {
        return items.map(item => createNewItem(item.id, item.value))
    }
})

//****functions****  
function addItem(e) {
    e.preventDefault();
    const value = input.value
    const id = new Date().getTime().toString();
    if (value && !editFlag) {

        createNewItem(id, value);

        displayAlert('Item added to the list', 'success');
        input.focus();

        //add to local storage
        addToLocalStorage(id, value);

        setBackToDefault();

        const editBtn = document.querySelectorAll('button.edit-btn')
        const deleteOneBtn = document.querySelectorAll('button.delete-btn')
        editBtn.forEach(item => {
            item.addEventListener('click', editItem);
        })
        deleteOneBtn.forEach((item) => {
            item.addEventListener('click', deleteOneItem);
        })


    }
    else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('Item edited', 'success');

        const id = editElement.parentNode.dataset.id
        //edit local storage
        editLocalStorage(id, value)

        setBackToDefault();


    }
    else {
        displayAlert('Please enter value', 'danger');
    }
}


//create new item
function createNewItem(id, value) {
    const article = document.createElement('article')
    article.innerHTML = ` <p class="title">${value}</p>
  <div class="btn-container">

      <button class="edit-btn">
          <i class='fas fa-edit'></i>

      </button>
      <button class="delete-btn">
          <i class="fa-solid fa-trash"></i>
      </button>
  </div>`;


    article.classList.add('grocery-item');
    article.setAttribute('data-id', id)

    list.appendChild(article);
    containerGrocery.classList.add('show-container');
}

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function clearAllItem() {
    const articleList = document.querySelectorAll('article.grocery-item');
    if (articleList.length > 0) {
        articleList.forEach(item => {
            list.removeChild(item);
        })
    }
    containerGrocery.classList.remove('show-container');
    displayAlert('All items removed', 'danger');

    //remove from local storage
    localStorage.removeItem('list');

    setBackToDefault();

}


function editItem(e) {
    editElement = e.currentTarget.parentNode.previousElementSibling;
    input.value = editElement.innerHTML;
    editFlag = true;
    //  editId = id;
    submitBtn.textContent = 'edit';
}

function deleteOneItem(e) {
    const article = e.currentTarget.parentNode.parentNode;

    const id = article.dataset.id;
    // list.removeChild(article)
    article.remove();

    if (list.childElementCount === 0) {
        containerGrocery.classList.remove('show-container');
    }
    displayAlert('Item removed from the list', 'danger');

    //remove from local storage
    removeFromLocalStorage(id);

    setBackToDefault();

}

//set back to default 
function setBackToDefault() {
    input.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'Submit';
}

function addToLocalStorage(id, value) {

    const grocery = { id, value }
    const items = getListFromLocalStorage();
    items.push(grocery)
    localStorage.setItem('list', JSON.stringify(items));
}


function removeFromLocalStorage(id) {

    let items = getListFromLocalStorage();
    items = items.filter(item => item.id !== id);
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    console.log(id, value);
    let items = getListFromLocalStorage();
    console.log('localStorage:', items);
    items = items.map(item => {
        if (item.id === id) {
            return {
                id,
                value,
            }

        }
        return item;
    })
    console.log('edit: ', items);
    localStorage.setItem('list', JSON.stringify(items));
}

function getListFromLocalStorage() {
    return (localStorage.getItem('list') ?
        JSON.parse(localStorage.getItem('list'))
        : [])
}




