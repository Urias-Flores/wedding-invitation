import { useEffect, useState } from "react"

import { getInvitations, updateInvitation } from "../server/data";

export default function FormUpdateInvitation({showUpdateInvitation, setShowUpdateInvitation, invitationSelected, setInvitationSelected, setMessageState}){
  const [name, setName] = useState('');
  const [adultsNumber, setAdultsNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [resultInvitation, setResultInvitation] = useState(0);

  const [validationText, setValidationText] = useState('');

  const [show, setShow] = useState(false);

  const loadInvitation = async () => {
    const invitations = await getInvitations();

    if(invitationSelected !== 0){
      const result = invitations.filter(invitation => invitation.id === invitationSelected)
      if(result.length > 0){
        setName(result[0].name);
        setAdultsNumber(result[0].adults);
        setChildrenNumber(result[0].children);

        setResultInvitation(result[0]);
      }
    }
  }

  useEffect(()=>{
    if(showUpdateInvitation){
      setShow(true);
    }
  }, [])

  useEffect(()=>{
    loadInvitation();
  }, [invitationSelected])

  const hideFrame = ()=>{
    setTimeout(()=>{
      setShowUpdateInvitation(false);
      setInvitationSelected(0);
    }, 500);
    setShow(false);
  }

  const handlerFunction = async () => {
    if(name.length === 0){
      setValidationText('ingrese el nombre')
      return
    }
    if(!adultsNumber || parseInt(adultsNumber) <= 0){
      setValidationText('la cantidad de adultos debe ser mayor o igual a cero')
      return
    }
    if(parseInt(childrenNumber) < 0){
      setValidationText('la cantidad de niños debe ser mayor o igual a cero')
      return
    }

    setValidationText("")

    const modifiedInvitation = {
      id: resultInvitation.id,
      name: name,
      adults: parseInt(adultsNumber),
      children: parseInt(childrenNumber),
      state: resultInvitation.state,
      code: resultInvitation.code
    }

    const result = await updateInvitation(modifiedInvitation);

    console.log(result)
    if(result.code === 1){
      setMessageState('updated')
    }

    if(result.code === 0){
      setMessageState('error')
    }

    hideFrame();
  }

  return (
    <div className="modal">
      <div className={`frame ${ show && "active"}`}>
        <img 
          src="/x.svg" 
          alt="x" 
          className="close_button"
          onClick={()=>{
            hideFrame();
          }}
        />

        <h4 className="frame__title">Actualizar invitación</h4>

        <div className="frame__field">
          <label htmlFor="name">Para: </label>
          <input 
            type="text" 
            placeholder="Nombre..." 
            id="name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        

        <label htmlFor="" className="amount__passes__title">Cantidad de pases</label>
        <div className="amount__passes">
          <div className="frame__field">
            <label htmlFor="adults">Adultos</label>
            <input 
              type="number" 
              placeholder="0" 
              id="adults"
              value={adultsNumber}
              onChange={(e)=>{setAdultsNumber(e.target.value)}}
            />
          </div>
          
          <div className="frame__field">
            <label htmlFor="children">Niños</label>
            <input 
              type="number" 
              placeholder="0" 
              id="children"
              value={childrenNumber}
              onChange={(e)=>{setChildrenNumber(e.target.value)}}
            />
          </div>
        </div>

        <p 
          className={`validation_text ${validationText.length > 0 ? 'active' : ''}`}
        >
          {validationText}
        </p>

        <button 
          className="frame__button"
          onClick={()=>{handlerFunction()}}
        >
          Guardar
        </button>
      </div>
    </div>
  )
}