import { deleteInvitation } from "../server/data";

export default function Register({invitation, setInvitationSelected, setShowUpdateInvitation, setShowCopyMessage, setMessageState}){
  const handlerFunction = async (id) => {
    const result = await deleteInvitation(id);

    if(result.code === 1){
      setMessageState('deleted')
    }

    if(result.code === 0){
      setMessageState('error')
    }
  }

  return (
    <div className="register">
      <div className="register__number">
        <h5 className="register__title">Para: </h5>
        <p className="register__name">{invitation.name}</p>
      </div>


      <div className="register__information">
        <div className="register__number">
          <h5 className="register__title">Adultos</h5>
          <p className="register__adults">{invitation.adults}</p>
        </div>

        <div className="register__number">
          <h5 className="register__title">Niños</h5>
          <p className="register__childrens">{invitation.children}</p>
        </div>

        <div className="register__number">
          <h5 className="register__title">Confirmó</h5>
          <p className="register__childrens">{invitation.state === 1 ? 'Si' : 'No'}</p>
        </div>
      </div>

      <div className="register__actions">
        <button
         className="register__data__button"
         onClick={()=>{
          navigator.clipboard.writeText(`https://invitacion-boda-kenneth-madai.netlify.app/?code=${invitation.code}`);
          setShowCopyMessage(true)
         }}
        >
          copiar link
        </button>


        <a
          href={`https://wa.me/?text=https://invitacion-boda-kenneth-madai.netlify.app/?code=${invitation.code}`}
          target="_blank"
          className="register__data__button green"
        >
          WhatsApp
        </a>

        <button
          className="register__data__button"
          onClick={()=>{
            setInvitationSelected(invitation.id);
            setShowUpdateInvitation(true);
          }}
        >
          Editar
        </button>

        <button
          className="register__data__button red"
          onClick={()=>{handlerFunction(invitation.id)}}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
