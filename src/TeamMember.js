import React from "react";

export default function TeamMember({setMemberToEdit, person}){
    return (
        <div className="member">
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.role}</p>
            <button onClick={()=> setMemberToEdit(person)} >Edit</button>
        </div>
    );
}