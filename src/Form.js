import React, {useState} from "react";

export default function Form({addMember}){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Backend",
    });
    const {name, email, role} = formData;
    function updateData(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form onSubmit={e=> addMember(e, {name, email, role})}>
            <input onChange={updateData}type="text" name="name" placeholder="Enter your name"/>
            <input onChange={updateData} type="email" name="email" placeholder="Enter your email"/>
            <select onChange={updateData} name="role">  
                <option default value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="UI">UI</option>
            </select>
            <button>Submit</button>
        </form>
    )
}