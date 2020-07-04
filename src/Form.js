import React, {useState} from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
    })
    return (
        <form>
            <input type="text" name="name" placeholder="Enter your name"/>
            <input type="email" name="email" placeholder="Enter your email"/>
            <select name="role">
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
                <option value="Fullstack">Fullstack</option>
                <option value="UI">UI</option>
            </select>
        </form>
    )
}