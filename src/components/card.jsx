import { useState, useEffect, useRef } from "react";

import { confirmInvitation } from "../server/data";

import Spinner from "./spinner";

//Sections
import MainSection from "./sections/mainSection";
import OurParents from "./sections/ourParents";
import Activities from "./sections/activities";
import DressCode from "./sections/dress-code";

export default function Card({invitation, setInvitation}){
    const confirmAssist = async () => {
      const newInvitation = invitation;
      newInvitation.state = -1;
      setInvitation(newInvitation);
      confirmInvitation(invitation.code).then(result => {
        if(result.code === 1){
          newInvitation.state = 1;
          setInvitation(newInvitation);
          return;
        }
        newInvitation.state = 0;
        setInvitation(newInvitation);
      })
    }

    return (
        <>
          <MainSection />

          <OurParents />

          <Activities />

          <DressCode />

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
              { (invitation.state === -1) 
                ? <Spinner></Spinner>
                : <>
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
                  </>
              }
            </div>
          </section>
        </>
    )
}