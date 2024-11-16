import { useEffect, useState } from "react"

export default function InvitationForm({showAddInvitation, setShowAddInvitation, showModifyInvitation, setShowModifyInvitation, updateData, data, invitationSelected,setInvitationSelected, modifyInvitation}){
  const [name, setName] = useState('');
  const [adultsNumber, setAdultsNumber] = useState(0);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [resultInvitation, setResultInvitation] = useState(0);

  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(invitationSelected !== 0){
      const result = data.filter(invitation => invitation.id === invitationSelected)
      if(result.length > 0){
        setName(result[0].name);
        setAdultsNumber(result[0].adults);
        setChildrenNumber(result[0].children);

        setResultInvitation(result[0])
      }
    }

    console.log(invitationSelected)
  }, [invitationSelected])

  useEffect(()=>{
    if(showAddInvitation || showModifyInvitation){
      setShow(true);
    }
  }, [])

  const hideFrame = ()=>{
    setTimeout(()=>{
      setShowAddInvitation(false);
      setShowModifyInvitation(false);
      setInvitationSelected(0);
    }, 500);
    setShow(false);
  }

  function generateCode(lenght = 8) {
    const values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    
    for (let i = 0; i < lenght; i++) {
      const randomIndex = Math.floor(Math.random() * values.length);
      code += values[randomIndex];
    }
    
    return code;
  }

  const addInvitation = () => {
    const newInvitation = {
      id: data.length + 1,
      name: name,
      adults: parseInt(adultsNumber),
      children: parseInt(childrenNumber),
      state: 0,
      code: generateCode(8)
    }
    const newData = [...data, newInvitation];

    updateData(newData);

    hideFrame();
  }

  const changeInvitation = () => {
    const modifiedInvitation = {
      id: resultInvitation.id,
      name: name,
      adults: parseInt(adultsNumber),
      children: parseInt(childrenNumber),
      state: resultInvitation.state,
      code: resultInvitation.code
    }

    modifyInvitation(modifiedInvitation);

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

        <button 
          className="frame__button"
          onClick={()=>{  console.log(invitationSelected); if(invitationSelected === 0) {addInvitation()} else {changeInvitation()}}}
        >
          Guardar
        </button>
      </div>
    </div>
  )
}