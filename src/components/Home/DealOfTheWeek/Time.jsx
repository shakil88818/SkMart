import {useState, useEffect} from 'react'

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 


    return () => clearInterval(intervalId);
  }, []);

  const hour = currentTime.getHours()
  const day=currentTime.getDay()
  const min=currentTime.getMilliseconds()
  const sec=currentTime.getSeconds()
  return (
    <>
      <p>{day}d <span>{hour}h</span>  <span>{hour}m</span>  </p>
    </>
  )
}

export default Time
