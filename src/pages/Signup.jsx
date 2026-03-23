import './Signup.css'
import React, {
    useState
}

from 'react';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    };

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log('Submitted:', { name, email })
    };

    return (
        <table>
            <tr>
                <td>
                    <form onSubmit={onSubmitForm}>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={onChangeName}></input> <br></br>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={onChangeEmail}></input>
                    </form>
                </td>
            </tr>
        </table>
    );
};

export default Signup;