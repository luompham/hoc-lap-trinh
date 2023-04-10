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



//****functions****  
function addItem(e) {
    e.preventDefault();
    const value = input.value
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
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

        displayAlert('Item added to the list', 'success');
        input.focus();

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
        console.log(editElement)
        editElement.innerHTML = value;
        displayAlert('Item edited', 'success');
        setBackToDefault();

    }
    else {
        displayAlert('Please enter value', 'danger');
    }
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
    console.log(articleList);
    if (articleList.length > 0) {
        articleList.forEach(item => {
            list.removeChild(item);
        })
    }
    containerGrocery.classList.remove('show-container');
    displayAlert('All items removed', 'danger');
    setBackToDefault();
    // removeFromLocalStorage(id);

}


function editItem(e) {
    editElement = e.currentTarget.parentNode.previousElementSibling;
    input.value = editElement.innerHTML;
    editFlag = true;
    // editId = id;
    submitBtn.textContent = 'edit';
    // console.log(editId);

}

function deleteOneItem(e) {
    console.log(e.currentTarget.parentNode.parentNode);
    const article = e.currentTarget.parentNode.parentNode;
    // list.removeChild(article)
    article.remove();

    if (list.childElementCount === 0) {
        containerGrocery.classList.remove('show-container');
    }
    displayAlert('Item removed from the list', 'danger');
    setBackToDefault();
    // removeFromLocalStorage(id);
}

//set back to default 
function setBackToDefault() {
    input.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'Submit';
}

function addToLocalStorage(id, value) {

}

function removeFromLocalStorage(id) {

}


