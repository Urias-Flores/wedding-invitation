import {useEffect, useState} from "react";

export default function Timer (){
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{
    const setRemainingTime = () => {
      const diferenciaMilisegundos = new Date('2025-04-05T17:00:00') - new Date();

      setDays(Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diferenciaMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((diferenciaMilisegundos % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((diferenciaMilisegundos % (1000 * 60)) / 1000));
    }

    const interval = setInterval(setRemainingTime, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <div className="timer">
      <div className="timer__element">
        <p>{days}</p>
        <p>dias</p>
      </div>

      <div className="timer__element">
        <p>{hours}</p>
        <p>horas</p>
      </div>

      <div className="timer__element">
        <p>{minutes}</p>
        <p>minutos</p>
      </div>

      <div className="timer__element">
        <p>{seconds}</p>
        <p>segundos</p>
      </div>
    </div>
  )
}
