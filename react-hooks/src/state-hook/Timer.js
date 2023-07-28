import React, { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000)
    })
    return (
        <>
            <h1>Time: {time}</h1>
        </>
    )
}