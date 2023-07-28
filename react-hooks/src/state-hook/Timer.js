import React, { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000)
        return () => {
            clearInterval(intervalId);
        }
    })
    return (
        <>
            <h1>Time: {time}</h1>
        </>
    )
}