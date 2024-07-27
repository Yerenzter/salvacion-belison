import axios from 'axios'

import {
    Button,
    Input,
    Page
} from '../../../lib';

let userId = 0;

export function UpdateUser() {
    try {
        let username = document.querySelector('#updateUsername');
        let user = {
            user_name: username.value,
            user_id: userId
        };
        axios.put('http://localhost:4435/users', user)
        .then(() => console.log('Success'))
        .catch(err => alert(err));
    } catch(err) {
        throw err;
    }
}

export function SetUserId(id) {
    return userId = id;
}

export function Footer() {
    return(
        <>
            <Button label='Cancel' toggle='modal' target='manageUsers' props='btn-secondary' />
            <Button label='Done' toggle='modal' click={() => UpdateUser()} target='manageUsers' props='btn-primary' />
        </>
    );
}

export function EditUser() {
    return(
        <Page id='editUser' title='Edit user account' footerChildren={ <Footer /> }>
            <Input id='updateUsername' label='Change username' />
        </Page>
    );
}

export default { EditUser, SetUserId } 