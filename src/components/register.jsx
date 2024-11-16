export default function Register({id, name, adults, children, status, code, deleteInvitation, setInvitationSelected, setShowModifyInvitation, setShowCopyMessage}){
  return (
    <div className="register">
      <div className="register__number">
        <h5 className="register__title">Para: </h5>
        <p className="register__name">{name}</p>
      </div>
      

      <div className="register__information">
        <div className="register__number">
          <h5 className="register__title">Adultos</h5>
          <p className="register__adults">{adults}</p>
        </div>
        
        <div className="register__number">
          <h5 className="register__title">Niños</h5>
          <p className="register__childrens">{children}</p>
        </div>

        <div className="register__number">
          <h5 className="register__title">Confirmó</h5>
          <p className="register__childrens">{status === 1 ? 'Si' : 'No'}</p>
        </div>
      </div>
      
      <div className="register__actions">
        <button 
         className="register__data__button"
         onClick={()=>{
          navigator.clipboard.writeText(`https://wedding-invitation-myk.netlify.app/?code=${code}`);
          setShowCopyMessage(true)
         }}
        >
          copiar link de invitacion
        </button>

        <button 
          className="register__data__button"
          onClick={()=>{
            setInvitationSelected(id);
            setShowModifyInvitation(true);
          }}
        >
          Editar
        </button>

        <button 
          className="register__data__button red"
          onClick={()=>{deleteInvitation(id)}}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}