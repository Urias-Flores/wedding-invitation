import { useEffect, useState } from "react";

export default function MainSection(){
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(()=>{
    const setRemainigTime = () => {
    const diferenciaMilisegundos = new Date('2025-04-05T17:00:00') - new Date();

    setDays(Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((diferenciaMilisegundos % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((diferenciaMilisegundos % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((diferenciaMilisegundos % (1000 * 60)) / 1000));
    }

    const interval = setInterval(setRemainigTime, 1000)

    return () => clearInterval(interval);
  }, [])

  return (
    <section>
      <h1 className="names">
        <p className="names__title">Kenneth</p>
        <p className="names__title">&</p>
        <p className="names__title">Madai</p>
      </h1>

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

      <h2 className="wewedding">¡Nos Casamos!</h2>

      <p className="verse">
        Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él <br />
        <span>1 Juan 4:16</span>
      </p>
    </section>
  )
}