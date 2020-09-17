import React, {useState} from 'react';

const Form = props => {
    const [members, setMembers] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setMembers({...members, [e.target.name]: e.target.value})
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(members);
        setMembers({name: "", email: "", role: ""});
    };

    return (
        <form onSubmit = {submitForm}>
            <label htmlFor = "name">Member name</label>
            <input
                id = "name"
                type = "text"
                name = "name"
                onChange = {handleChanges}
                placeholder = "name"
                value = {members.name}
                required
            />
            <label htmlFor = "email">email</label>
            <input
                id = "email"
                type = "text"
                name = "email"
                onChange = {handleChanges}
                placeholder = "email"
                value = {members.email}
                required
            />
            <label htmlFor = "role">role</label>
            <input
                id = "role"
                type = "text"
                name = "role"
                onChange = {handleChanges}
                placeholder = "role"
                value = {members.role}
                required
            />
            <button type = "submit">Add Member</button>
        </form>
    );
};

export default Form;