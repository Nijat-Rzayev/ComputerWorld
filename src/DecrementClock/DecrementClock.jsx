import React, { useState, useEffect } from 'react';

function DecrementClock(props) {
    const { mounth, day, hour, second, minutes } = props;

    const [remainingTime, setRemainingTime] = useState({
        day: 0,
        hour: 0,
        minute: 0,
        second: 0
    });

    useEffect(() => {
        const countDate = new Date(`${mounth} ${day}, 2023 ${hour}:${minutes}:${second}`).getTime();

        const intervalID = setInterval(() => {
            const now = new Date().getTime();
            const gap = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);

            setRemainingTime({
                day: textDay,
                hour: textHour,
                minute: textMinute,
                second: textSecond
            });
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    return (
        <>
            <li>{remainingTime.hour} </li>
            <li>{remainingTime.minute} </li>
            <li>{remainingTime.second} </li>
        </>
    );
}

export default DecrementClock;
