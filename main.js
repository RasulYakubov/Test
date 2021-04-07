function handleAddBtnClick() {
    var addDataContainer = document.getElementById('addData');
    var inputElement = addDataContainer.firstElementChild;

    var inputValue = inputElement.value;
    updateUIAndLS(inputValue);
}

function updateUIAndLS(value) {
    var updatedArray = updateLS(value);
    updateUI(updatedArray);
}

function updateLS(newValue) {
    writeToLS(newValue);
    var result = readArrayFromLS();

    return result;
}

function updateUI(array) {
    clearUI();
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        render(element);
    }
} 

function clearUI() {
    document.getElementById('container').innerHTML = '';
}

function render(item) {
    var span = document.createElement('span');
    span.innerText = item;

    document.getElementById('container').append(span);
}

function writeToLS(item) {
    var array = readArrayFromLS();
    array.push(item);

    localStorage.setItem('items', JSON.stringify(array));
}

function readArrayFromLS() {
    var response = localStorage.getItem('items');

    if (response) {
        response = JSON.parse(response);
    } else {
        response = [];
    }

    return response;
}

function handleWindowLoad() {
    var addDataContainer = document.getElementById('addData');
    var addBtn = addDataContainer.lastElementChild;

    addBtn.addEventListener('click', handleAddBtnClick);

    var editDataContainer = document.getElementById("editData");
    var editBtn = editDataContainer.lastElementChild;
    
    editBtn.addEventListener('click', handleEditBtnClick);

    var deleteDataContainer = document.getElementById('deleteData');
    var deleteBtn = deleteDataContainer.lastElementChild;

    deleteBtn.addEventListener('click', handleDeleteBtnClick);

    loadData();
}

function handleDeleteBtnClick() {
    var deleteDataContainer = document.getElementById('deleteData');
    
    var index = deleteDataContainer.children[0].value;

    var oldArray = readArrayFromLS();

    if (index == 0) {
        oldArray.shift();
    } else {
        oldArray.pop();
    }

    localStorage.setItem('items', JSON.stringify(oldArray));
    
    var newArray = readArrayFromLS();
    updateUI(newArray);
}

function loadData() {
    var array = readArrayFromLS();
    updateUI(array);
}

function handleEditBtnClick() {
    var index = document.getElementById('editData').children[0].value;
    var text = document.getElementById('editData').children[1].value;
    
    var oldArray = readArrayFromLS();
    oldArray[index] = text;
    localStorage.setItem('items', JSON.stringify(oldArray));
    
    var newArray = readArrayFromLS();
    updateUI(newArray);
}

window.addEventListener('load', handleWindowLoad);