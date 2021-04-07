function handleAddBtnClick() {
    console.log('click')
}

function handleWindowLoad() {
    var addDataContainer = document.getElementById('addData');
    var addBtn = addDataContainer.lastElementChild;

    addBtn.addEventListener('click', handleAddBtnClick);
}

window.addEventListener('load', handleWindowLoad);