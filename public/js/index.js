import { editUser } from './editUser';
import { createUser } from './createUser';
import { deleteUser } from './deleteUser';

const userRow = document.querySelectorAll('.user--row');
const newUserForm = document.querySelector('.form--user');
const editUserForm = document.querySelector('.form--edit');


if(userRow) {
    userRow.forEach(row => {
        row.addEventListener('click', (e) => {
            if(e.target.id === 'delete--btn' || e.target.classList.contains('fa-times')) {
                deleteUser(e.target.dataset.id);
            };
        });
    });
};

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
    });
};

const getValues = (obj) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    if(name) obj.name = name;
    if(email) obj.email = email;
    if(gender) obj.gender = document.querySelector('input[name="gender"]:checked').value;
    if(status) obj.status = document.querySelector('input[name="status"]:checked').value;

    return obj;
}

if(editUserForm) {
    editUserForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const userId = urlParams.get('userId');

        let dataObj = {};
        getValues(dataObj);
        editUser(userId, dataObj);
    });
};