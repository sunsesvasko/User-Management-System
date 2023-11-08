import { createUser } from './createUser';

const newUserForm = document.querySelector('.form--user');

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