import React, {useState, useEffect} from "react";

import "./form.css"

export default function Form({editMember, addMember, memberToEdit}){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Backend",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const {name, email, role} = formData;

    useEffect(()=>{
        if(memberToEdit) setFormData(memberToEdit);
        if(!memberToEdit) resetFormData();
    }, [memberToEdit]);
    
    function resetFormData(){
        setFormData({name: "", email: "", role: "Backend"})
    }

    function submit(e, person){
        e.preventDefault();
        setErrorMessage("");
        if(!person.name || !person.email || !person.role) return setErrorMessage("All fields are required");
        if(/[0-9]/.test(person.name)) return setErrorMessage("Name cannot contain numbers")
        if(memberToEdit) return editMember(e, memberToEdit, person);
        addMember(e, person);
        resetFormData();
    }

    function updateData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form onSubmit={e=> submit(e, {name, email, role})}>
            <input value={name || ""} onChange={updateData}type="text" name="name" placeholder="Enter your name"/>
            <input value={email || ""} onChange={updateData} type="email" name="email" placeholder="Enter your email"/>
            <select value={role || "Backend"} onChange={updateData} name="role">  
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="UI">UI</option>
            </select>
            <button>Submit</button>
            {errorMessage && <div className="error-message">
                <p>{errorMessage}</p>
            </div>}
        </form>
    )
}