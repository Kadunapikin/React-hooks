import React, { useState } from 'react';
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
    const [phone, setPhone] = useState('');
    return (
        <div>
            <label for='phone-input'>Phone</label>
            <input id='phone-input' value={phone} />
        </div>
    )
}