import axios from 'axios';

export const editUser = async(id, data) => {
    try {
        const res = await axios({
            method: 'PATCH',
            url: `/api/users/${id}`,
            data
        })

        if(res.data.status === 'success') {
            alert('User updated successfully!');
            window.setTimeout(() => {
                location.assign('/');
            }, 1000);
        }

    } catch(err) {
        console.log(err.response.data.message);
    }
}