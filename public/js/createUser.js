import axios from 'axios';

export const createUser = async(data) => {
    try {
        const res = await axios({
            method: 'POST',
            url: '/api/users',
            data
        });

        if(res.data.status === 'success') {
            alert('User created successfully!');
            window.setTimeout(() => {
                location.assign('/');
            }, 1000);
        }

    } catch(err) {
        console.error(err.response.data.message);
    }
};