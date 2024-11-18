import { useEffect, useState } from 'react'
import './App.css'
import './styles/InvitationNotFound.css'

import Card from "./components/card";
import Invitations from './components/invitations';
import InvitationNotFound from './components/invitationNotFound';

import { getInvitationByCode } from './server/data';

function App() {
  const [invitation, setInvitation] = useState({});

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const state = params.get("state");

  const loadInvitation = async () => {
    const result = await getInvitationByCode(code);
    setInvitation(result);
  }

  useEffect(()=> {
    loadInvitation();
  }, [])

  return (
    <>
      { (code === null || Object.keys(invitation).length === 0) &&
        <InvitationNotFound />
      }

      { (!state && code !== null && Object.keys(invitation).length > 0) &&
        <Card invitation={invitation} setInvitation={setInvitation}/>
      }

      { state === 'edit' && 
        <Invitations />
      }

      
    </>
  )
}

export default App
