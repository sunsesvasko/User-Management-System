import { createUser } from './createUser';
import { deleteUser } from './deleteUser';

const userRow = document.querySelectorAll('.user--row');
const newUserForm = document.querySelector('.form--user');


if(userRow) {
    userRow.forEach(row => {
        row.addEventListener('click', (e) => {
            if(e.target.id === 'delete--btn' || e.target.classList.contains('fa-times')) {
                deleteUser(e.target.dataset.id);
            }
        })
    })
}

if(newUserForm) {
    newUserForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const dataObj = {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            gender: document.querySelector('.genderCb:checked').value,
            status: document.querySelector('.statusCb:checked').value
        };

        createUser(dataObj);
    })
}