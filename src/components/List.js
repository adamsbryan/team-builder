import React from "react";

const List = props => {
    console.log(props)
    return (
        <div className = "member-list">
        {props.members.map(member => (
            <div className = "member" key = {member.name}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
            </div>
        ))}
        </div>
    );
};

export default List;