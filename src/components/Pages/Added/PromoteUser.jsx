import axios from 'axios';

export default function PromoteUser(type, id) {
    try {
        const user = {
            user_type: type,
            user_id: id
        };

        axios.put('http://localhost:4435/users/promote', user)
        .then(() => console.log('Success!'))
        .catch(e => console.log(e));
    } catch(e) {
        throw e;
    }
}