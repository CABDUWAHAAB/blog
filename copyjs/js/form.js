import axios from 'axios';
import { showAlert } from './alert';

export const submitForm = async (title, author, description) => {
    try {
        const res = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:3000/api/v1/blogs',
            data: {
                title,
                author,
                description
            }
        });
        if (res.data.status === 'success') {
            showAlert('success', 'Data successfully created');
            window.setTimeout(() => {
                // geef bij assign het correcte routes waar je showAlert wilt zien.
                location.assign('/blog');
            }, 10000);
        }
    } catch (err) {
        console.log(err.response)
        showAlert('error', err.response);
    }
};
