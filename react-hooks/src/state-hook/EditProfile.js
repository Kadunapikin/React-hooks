import React, { useState } from "react";

export default function EditProfile() {
    const[profile, setProfile] = useState({});
    return (
        <form>
            <input
                value={profile.firstName || ""}
                name="firstName"
                type="text"
                placeholder="first Name" 
            />
            <input
                value={profile.lastName || ""}
                name="lastName"
                type="text"
                placeholder="last Name" 
            />
            <input
                value={profile.bday || ""}
                name="bday"
                type="date"
            />
            <input
                value={profile.password || ""}
                name="password"
                type="password"
                placeholder="Password" 
            />
        </form>
    )
}
