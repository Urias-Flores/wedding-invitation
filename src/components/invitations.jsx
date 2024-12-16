import { useEffect, useState } from "react";

import "../styles/invitations.css"

import Register from "./register";
import FormAddInvitation from "./formAddInvitation";
import FormUpdateInvitation from "./formUpdateInvitation";
import Message from "./message";
import CopyMessage from "./copyMessage";

import { getInvitations } from "../server/data";

export default function Invitations(){
  const [data, setData] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [invitationsC, setInvitationsC] = useState(0);
  const [adultsC, setAdultsC] = useState(0);
  const [childrenC, setChildrenC] = useState(0);

  //Form
  const [showAddInvitation, setShowAddInvitation] = useState(false);
  const [showUpdateInvitation, setShowUpdateInvitation] = useState(false);

  //Messages
  const [messageState, setMessageState] = useState("hola");
  const [showCopyMessage, setShowCopyMessage] = useState(false);

  const [invitationSelected, setInvitationSelected] = useState(0);

  const [search, setSearch] = useState("");

  const loadData = async () =>{
    const response = await getInvitations();
    setData(response);
    setInvitations(response);
  }

  useEffect(() => {
    loadData();
  }, [])

  useEffect(()=>{
    const result = data.filter(invitation => invitation.name.toLowerCase().includes(search.toLowerCase()));
    setInvitations(result);
  }, [search])

  useEffect(() => {
    setAdults(data.reduce((total, invitation)=>total + invitation.adults, 0));
    setChildren(data.reduce((total, invitation)=> total + invitation.children, 0));

    const invitationsConfirmed = data.reduce((total, invitation)=>{
      return invitation.state === 0 ? total : total + 1
    }, 0)

    setInvitationsC(invitationsConfirmed);

    const adulstConfirmed = data.reduce((total, invitation)=>{
      return invitation.state === 0 ? total : total + invitation.adults
    }, 0)

    setAdultsC(adulstConfirmed);

    const childrenConfirmed = data.reduce((total, invitation) => {
      return invitation.state === 0 ? total : total +     invitation.children
    }, 0)

    setChildrenC(childrenConfirmed);
  }, [data])

  return (
    <>
      { showAddInvitation &&
        <FormAddInvitation
          showAddInvitation={showAddInvitation}
          setShowAddInvitation={setShowAddInvitation}
          setMessageState={setMessageState}
        />
      }

      { showUpdateInvitation &&
        <FormUpdateInvitation
          showUpdateInvitation={showUpdateInvitation}
          setShowUpdateInvitation={setShowUpdateInvitation}
          invitationSelected={invitationSelected}
          setInvitationSelected={setInvitationSelected}
          setMessageState={setMessageState}
        />
      }

      { showCopyMessage &&
        <CopyMessage
          setShowCopyMessage={setShowCopyMessage}
        ></CopyMessage>
      }

      { messageState === 'added' &&
        <Message
          reload={loadData}
          setMessageState={setMessageState}
          text={"Invitacion agregada correctamente"}
          icon={"success"}
        />
      }

      { messageState === 'updated' &&
        <Message
          reload={loadData}
          setMessageState={setMessageState}
          text={"Invitacion actualizada correctamente"}
          icon={"success"}
        />
      }

      { messageState === 'deleted' &&
        <Message
          reload={loadData}
          setMessageState={setMessageState}
          text={"Invitacion eliminada correctamente"}
          icon={"delete"}
        />
      }

      { messageState === 'error' &&
        <Message
          reload={loadData}
          setMessageState={setMessageState}
          text={"Ha ocurrido un error al realizar los cambios."}
          icon={"error"}
        />
      }

      <main>
        <h2 className="title">Invitaciones</h2>

        <input
          type="text"
          placeholder="buscar..."
          className="search"
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
        />

        <div className="invitations__information">
          <h3 className="information__title">Invitaciones totales</h3>

          <div className="information__item">
            <h4 className="item__title">Invitaciones</h4>
            <p className="item__value">{data.length}</p>
          </div>

          <div  className="information__item">
            <h4 className="item__title">Adultos</h4>
            <p className="item__value">{adults}</p>
          </div>

          <div  className="information__item">
            <h4 className="item__title">Niños</h4>
            <p className="item__value">{children}</p>
          </div>

          <h3 className="information__title">Invitaciones confirmadas</h3>

          <div className="information__item">
            <h4 className="item__title">Invitaciones</h4>
            <p className="item__value">{invitationsC}</p>
          </div>

          <div  className="information__item">
            <h4 className="item__title">Adultos</h4>
            <p className="item__value">{adultsC}</p>
          </div>

          <div  className="information__item">
            <h4 className="item__title">Niños</h4>
            <p className="item__value">{childrenC}</p>
          </div>
        </div>

        <div className="actions">
          <button
            className="action__button"
            onClick={()=>{setShowAddInvitation(true)}}
          >
            Agregar
          </button>
        </div>

        <div className="registers">
          { invitations.map(invitation =>
            <Register
              key={invitation.id}
              invitation={invitation}
              setInvitationSelected={setInvitationSelected}
              setShowUpdateInvitation={setShowUpdateInvitation}
              setShowCopyMessage={setShowCopyMessage}
              setMessageState={setMessageState}
            />
          )}
        </div>
      </main>
    </>
  )
}
