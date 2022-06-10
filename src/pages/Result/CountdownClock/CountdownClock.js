import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const CountdownClock = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval;

    const startTimer = () => {
        const countdownDate = new Date('June 22 2022 23:59:59').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                clearInterval(interval.current);
            } else {
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <Container>

            {/* Timer Countdown Section  */}
            <div className="d-md-flex justify-content-evenly py-3" >
                <div>
                    <p className='fs-4 text-danger fw-bold'>{timerDays}</p>
                    <p>Days</p>
                </div>
                <div>
                    <p className='fs-4 text-danger fw-bold'>{timerHours}</p>
                    <p>Hours</p>
                </div>
                <div>
                    <p className='fs-4 text-danger fw-bold'>{timerMinutes}</p>
                    <p>Minutes</p>
                </div>
                <div>
                    <p className="fs-4 text-danger fw-bold">{timerSeconds}</p>
                    <p>Seconds</p>
                </div>
            </div>
        </Container>
    );
};

export default CountdownClock;