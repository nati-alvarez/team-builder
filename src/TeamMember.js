import React from "react";

export default function TeamMember({setMemberToEdit, person}){
    return (
        <div onClick={()=> setMemberToEdit(person)} className="member">
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.role}</p>
        </div>
    );
}