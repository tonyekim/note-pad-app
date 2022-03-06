const notePadInput = document.querySelector('.note-pad-input');
const btn = document.querySelector('.btn');
const notepadList = document.querySelector('.note-pad-list');
const deleteAll = document.querySelector('.delete-all');



// Event Listener
btn.addEventListener('click', addNote);
notepadList.addEventListener('click', deleteCheck);
deleteAll.addEventListener('click', deleteCheck);


// function
function addNote(event) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    const lis = document.createElement('li');
    lis.textContent = document.querySelector('.note-pad-input').value;
    lis.classList.add('newNote');
    noteDiv.appendChild(lis);

    const addButton = document.createElement('button');
    addButton.innerHTML = '<i class="fas fa-plus-square"></i>';
    addButton.classList.add('add-button');
    noteDiv.appendChild(addButton);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteButton.classList.add('delete-button');
    noteDiv.appendChild(deleteButton);
    document.querySelector('.note-pad-list').appendChild(noteDiv);
    document.querySelector('.note-pad-input').value = '';
}


function deleteCheck(event) {
    const item = event.target;
    if (item.classList[0] === 'delete-button') {
        const note = item.parentElement;
        note.remove();
    }
    if (item.classList[0] === 'add-button');
    const note = item.parentElement;
    note.classList.toggle('completed');

    const items = event.target;
    if (items.classList[0] === 'delete-all');
    const notes = document.querySelector('.note, .delete-button, .add-button, .newNote');
    notes.remove();
}