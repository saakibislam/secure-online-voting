import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';

const CountdownTimer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('July 22 2022 00:00:00').getTime();

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
        let isMounted = true;
        if (isMounted) {
            startTimer();
        }
        return () => {
            isMounted = false;
            clearInterval(interval.current);
        }
    }, [])

    return (
        <div style={{ backgroundColor: 'teal', color: 'white', padding: '4em 0' }}>
            <Container>
                {/* Icon & Title Section  */}
                <div>
                    <i className="fas fa-vote-yea fa-7x mb-2"></i>
                    <p className='display-5'>Upcoming election</p>
                </div >
                {/* Timer Countdown Section  */}
                <div className="d-md-flex justify-content-evenly p-5" >
                    <div>
                        <p className='fs-1'>{timerDays}</p>
                        <p className='fs-5'>Days</p>
                    </div>
                    <div>
                        <p className='fs-1'>{timerHours}</p>
                        <p className='fs-5'>Hours</p>
                    </div>
                    <div>
                        <p className='fs-1'>{timerMinutes}</p>
                        <p className='fs-5'>Minutes</p>
                    </div>
                    <div>
                        <p className="fs-1">{timerSeconds}</p>
                        <p className='fs-5'>Seconds</p>
                    </div>
                </div>
            </Container >
        </div>
    );
};

export default CountdownTimer;