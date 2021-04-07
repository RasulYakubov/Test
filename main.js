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
}

window.addEventListener('load', handleWindowLoad);