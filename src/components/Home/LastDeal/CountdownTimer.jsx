import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date('2023-10-31T00:00:00').getTime();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft <= 0) {
        clearInterval(intervalId);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="countdownTimer">
      <div className="timerItem">
        <h6> {countdown.days} <span>D:</span></h6>
      </div>
      <div className="timerItem">
        <h6> {countdown.hours} <span>H:</span></h6>
      </div>
      <div className="timerItem">
        <h6> {countdown.minutes} <span>M:</span></h6>
      </div>
      <div className="timerItem">
        <h6> {countdown.seconds} <span>S</span></h6>
      </div>
    </div>
  );
};

export default CountdownTimer;