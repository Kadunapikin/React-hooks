import React, { useState } from "react";

export default function EditProfile() {
    const[profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setProfile((prev) => ({
            ...prev, [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, "", 2));
      };

    return (
        <form>
            <h1>Objects in State</h1>
            <input
                value={profile.firstName || ""}
                name="firstName"
                type="text"
                placeholder="first Name"
                onChange={handleChange}
            />
            <input
                value={profile.lastName || ""}
                name="lastName"
                type="text"
                placeholder="last Name"
                onChange={handleChange} 
            />
            <input
                value={profile.bday || ""}
                name="bday"
                type="date"
                onChange={handleChange}
            />
            <input
                value={profile.password || ""}
                name="password"
                type="password"
                placeholder="Password" 
                onChange={handleChange}
            />
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
    )
}
