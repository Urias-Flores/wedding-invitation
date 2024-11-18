import { useState, useEffect } from "react";

import { confirmInvitation } from "../server/data";

export default function Card({invitation, setInvitation}){
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

    const confirmAssist = async () => {
      const result = await confirmInvitation(invitation.code);
      if(result.code === 1){
        const newInvitation = invitation;
        newInvitation.state = 1;
        setInvitation(newInvitation);
      }
    }

    return (
        <>
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

          <section>
            <h2 className="wedding-date">05 Abril 2025</h2>

            <h3 className="our-parents">Nuestro padres</h3>


            <div className="parents">
              <h4 className="parents__title">Novia</h4>
              <p className="parents__name">Coric Esmeralda Flores Osorio</p>
            </div>

            <div className="parents">
              <h4 className="parents__title">Novio</h4>
              <p className="parents__name">José Manuel Aguilar Rivas</p>
              <p className="parents__name">Fanny Yaquelin Flores Sauceda</p>
            </div>
          </section>

          <section className='activities'>
            <div className='activity__frame'>
              <h3 className='activity__name'>Ceremonia</h3>

              <p className='activity__place'>Orillas de la playa, Tela, Atlantida</p>
              <p className='activity__time'>05:00 PM</p>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.442887002711!2d-87.46284293893538!3d15.78058430071304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f687dfea8faee6b%3A0x175b36df64c2542e!2sTela%2C%20Atl%C3%A1ntida!5e0!3m2!1ses-419!2shn!4v1731028431188!5m2!1ses-419!2shn" 
                width="400" 
                height="300" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>

            <div div className='activity__frame'>
              <h3  className='activity__name'>Recepción</h3>

              <p className='activity__place'>Cabaña contiguo a Hotel XXXXXX, Tela, Atlantida</p>
              <p className='activity__time'>08:00 PM</p>
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.442887002711!2d-87.46284293893538!3d15.78058430071304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f687dfea8faee6b%3A0x175b36df64c2542e!2sTela%2C%20Atl%C3%A1ntida!5e0!3m2!1ses-419!2shn!4v1731028431188!5m2!1ses-419!2shn" 
                width="400" 
                height="300" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </section>

          <section className='invitation'>
            <h2 className='invitation__title'>
              <span>K</span>
              <span>&</span>
              <span>M</span>
            </h2>

            

            <div>
              <h3 className='invitation__passestext'>Para:</h3>
              <h4 className="invitation__passesname">{invitation.name}</h4>

              <h3 className='invitation__passestext'>Pases otorgados</h3>

              <div className='passes'>
                <div className='pass__item'>
                  <img src="/adult.svg" alt="adult" className='pass__image'/>
                  <p className='pass__name'>Adultos</p>
                  <p className='pass__number'>{invitation.adults}</p>
                </div>

                <div className='pass__item'>
                  <img src="/kid.svg" alt="kid" className='pass__image'/>
                  <p className='pass__name'>Niños</p>
                  <p className='pass__number'>{invitation.children}</p>
                </div>
              </div>
            </div>

            <div className='assist'>
              <h3 className='assist__title'>
                { invitation.state === 1
                  ? "Tu asistencia ha sido confirmada"
                  : "Confirma tu asistencia"
                }
              </h3>

              <p className='assist__text'>
                { invitation.state == 1
                  ? "Gracias por hacerme saber que podras venir y acompañarnos en este dia tan especial."
                  : "Para nosotros sera un gusto que puedas acompañarnos en este momento tan especial,  si decides y tienes la posibilidad de hacerlo por favor confirma tu asistencia."
                }
              </p>


              { invitation.state === 0 ?
                <input 
                  type="button" 
                  value={invitation.state === 1 ? "cancelar" : "confirmar"}
                  onClick={()=>{confirmAssist()}}
                  className="confirmbutton"
                /> :
                <></>
              }
              
            </div>
          </section>
        </>
    )
}