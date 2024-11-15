import { useEffect, useState } from 'react'
import './App.css'

import Card from "./components/card";
import Invitations from './components/invitations';

function App() {

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

  const params = new URLSearchParams(window.location.search);
  const state = params.get("state");
  const code = params.get("code");

  const confirmAssist = ()=>{

  }

  return (
    
    <main>
      { (!state || state === 'normal') &&
        <Card confirmAssist={confirmAssist}></Card>
      }

      { state === 'edit' && 
        <Invitations />
      }
      
    </main>
  )
}

export default App
