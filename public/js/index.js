import { submitForm } from './form';

const formElement = document.querySelector('.form--data');

if (formElement) {
    formElement.addEventListener('submit', e => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const description = document.getElementById('description').value;
        submitForm(title, author, description);
    });
}
