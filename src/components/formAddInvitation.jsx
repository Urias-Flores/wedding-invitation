import { useEffect, useState } from "react"

import { addInvitation } from "../server/data";

export default function FormAddInvitation({showAddInvitation, setShowAddInvitation, setMessageState}){
  const [name, setName] = useState('');
  const [adultsNumber, setAdultsNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);

  const [validationText, setValidationText] = useState('');

  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(showAddInvitation){
      setShow(true);
    }
  }, [])

  const hideFrame = ()=>{
    setTimeout(()=>{
      setShowAddInvitation(false);
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

    const newInvitation = {
      name: name,
      adults: parseInt(adultsNumber),
      children: parseInt(childrenNumber),
      state: 0,
    }

    const result = await addInvitation(newInvitation);

    hideFrame();

    if(result.code === 1){
      setMessageState('added')
    }

    if(result.code === 0){
      setMessageState('error')
    }
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

        <h4 className="frame__title">Agregar invitacion</h4>

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
        

        <label className="amount__passes__title">Cantidad de pases</label>
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