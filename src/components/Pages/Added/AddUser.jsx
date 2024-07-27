import axios from 'axios';
import "../../../css/Instant.css";
import {
    Button,
    Input,
    Page
} from '../../../lib';

export function CreateUser() {
    try {
        const username = document.querySelector('#addUsername');
        const password = document.querySelector('#addPassword');
        const accountType = document.querySelector('#addAccountType');
        const user = {
            user_name: username.value,
            user_password: password.value,
            user_type: accountType.value
        };
        axios.post('http://localhost:4435/users', user)
        .then(() => alert('Success!'))
        .catch(err => console.log(err)); 
    } catch(e) {
        throw e;
    }
}

export function Footer() {
    return(
        <>
        <Button label='Cancel' toggle='modal' target='manageUsers' props='btn-secondary' />
        <Button label='Done' toggle='modal' target='manageUsers' click={() => CreateUser()} props='btn-info' />
        </>
    );
}
export default function AddUser() {
    return(
        <Page id='addUser' title='Add new user' footerChildren={ <Footer /> }>
            <Input label='Create username' id='addUsername' />
            <Input label='Create password' id='addPassword' />
            <div className='input-group'>
                <Input id='addAccountType' label='Select Account Type' readonly={true}/>
                <ul className='dropdown-menu'>
                    <li onClick={() => addAccountType.value = 'Admin'}><a className='dropdown-item'>Admin</a></li>
                    <li onClick={() => addAccountType.value = 'Personnel'}><a className='dropdown-item'>Personnel</a></li>
                </ul>
            </div>
            <Button props='btn-outline-secondary dropdown-toggle' toggle='dropdown' label='Account Type' />
        </Page>
    );
}
