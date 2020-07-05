import React from "react";

export default function TeamMember({person}){
    return (
        <div className="member">
            <p>{person.name}</p>
            <p>{person.email}</p>
            <p>{person.role}</p>
        </div>
    );
}