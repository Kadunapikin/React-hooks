import React, { useState } from "react";

export default function EditProfile() {
    const[profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setProfile((prev) => ({
            ...prev, [name]: value,
        }));
    };
    return (
        <form>
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
        </form>
    )
}
