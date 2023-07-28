import React, { useState } from 'react';
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
    const [phone, setPhone] = useState('');

    const handleChange = ({ target }) => {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);

        if (isValid) {
            setPhone(newPhone)
        }
    };
    return (
        <div>
            <h1>React Use State Setter Outside of JSX</h1>
            <label for='phone-input'>Phone</label>
            <input id='phone-input' value={phone} onChange={handleChange} />
        </div>
    )
}