import React from "react";

import './team-member.css';

export default function TeamMember({setMemberToEdit, person}){
    return (
        <div className="member">
            <p className="name">{person.name}</p>
            <p className="email">{person.email}</p>
            <p>{person.role}</p>
            <button onClick={()=> setMemberToEdit(person)} >Edit</button>
        </div>
    );
}