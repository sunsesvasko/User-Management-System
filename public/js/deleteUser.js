import axios from 'axios';

export const deleteUser = async(id) => {
    try {
        if(confirm('Do you really want to delete this user?') == true) {
            const res = await axios({
                method: 'DELETE',
                url: `/api/users/${id}`
            });
        
            console.log(res);

            if(res.status === 204) {
                alert('User deleted successfully!');
                window.setTimeout(() => {
                    location.assign('/');
                }, 1000);
            };
        } else {
            return;
        }
    } catch(err) {
        console.log(err);
    }
}