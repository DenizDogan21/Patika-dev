const errorToastDOM = document.querySelector('#liveToast.error');
const successToastDOM = document.querySelector('#liveToast.success');
let inputDOM = document.querySelector('#task');
let listDOM = document.getElementById('list');

// Load saved items from localStorage on page load
document.addEventListener('DOMContentLoaded', loadItemsFromLocalStorage);

function newElement() {

    // Input is empty
    if (inputDOM.value == "") {
        // Show error toast
        $(errorToastDOM).toast('show');
    } else {
        // ADDING NEW ITEM
        // Show success toast
        $(successToastDOM).toast('show');

        // Create a new list item
        let li = document.createElement('li');
        li.textContent = inputDOM.value;

        // Append the new list item to the list
        listDOM.appendChild(li);

        // Save the updated list to localStorage
        saveItemsToLocalStorage();

        // Clear the input field after adding the task
        inputDOM.value = "";

        // Create a close button and append it to the list item
        let closeButton = document.createElement('button');
        closeButton.textContent = "X";
        closeButton.className = "close";
        closeButton.onclick = removeElement;
        li.appendChild(closeButton);
    }
}

// MARKING AND UNMARKING ITEM
listDOM.addEventListener("click", checked);
function checked(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveItemsToLocalStorage(); // Save the state of items to localStorage
    }
}

// REMOVING ITEM
function removeElement(event) {
    let li = event.target.parentElement;
    li.remove();
    saveItemsToLocalStorage(); // Save the updated list to localStorage
}

function toggleDone(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('done');
    }
}

// Add event listeners to existing list items
document.querySelectorAll('#list li').forEach(li => {
    li.addEventListener('click', toggleDone);

    // Create and append close button to each existing list item
    let closeButton = document.createElement('button');
    closeButton.textContent = "X";
    closeButton.className = "close";
    closeButton.onclick = removeElement;
    li.appendChild(closeButton);
});

// Function to save items to localStorage
function saveItemsToLocalStorage() {
    let items = [];
    document.querySelectorAll('#list li').forEach(li => {
        items.push({
            text: li.textContent.replace('X', '').trim(),
            checked: li.classList.contains('checked')
        });
    });
    localStorage.setItem('todoList', JSON.stringify(items));
}

// Function to load items from localStorage
function loadItemsFromLocalStorage() {
    let items = JSON.parse(localStorage.getItem('todoList')) || [];
    items.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.text;

        if (item.checked) {
            li.classList.add('checked');
        }

        // Create and append close button to the list item
        let closeButton = document.createElement('button');
        closeButton.textContent = "X";
        closeButton.className = "close";
        closeButton.onclick = removeElement;
        li.appendChild(closeButton);

        listDOM.appendChild(li);
    });
}
