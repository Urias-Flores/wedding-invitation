import { useEffect, useState } from "react";

import "../styles/invitations.css"

import Register from "./register";
import InvitationForm from "./invitationForm";
import CopyMessage from "./copyMessage";

export default function Invitations(){
  const [data, setData] = useState([]);
  const [invitations, setInvitations] = useState([]);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [invitationsC, setInvitationsC] = useState(0);
  const [adultsC, setAdultsC] = useState(0);
  const [childrenC, setChildrenC] = useState(0);

  const [showAddInvitation, setShowAddInvitation] = useState(false);
  const [showModifyInvitation, setShowModifyInvitation] = useState(false);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [invitationSelected, setInvitationSelected] = useState(0);

  const [search, setSearch] = useState("");

  const getData = async () => {
    const response = await fetch(`/api/data`)
    if(response.ok){
      const invitations = await response.json();
      setData(invitations);
      setInvitations(invitations);
    }
  }
  
  const updateData = async (newData) => {
    const response = await fetch(`/api/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    })

    if(response.ok){
      getData();
    }
  }

  const deleteInvitation = (id) => {
    const result = data.filter(invitation => invitation.id != id)
    updateData(result);
  }

  const modifyInvitation = (invitation) => {
    const result = data.find(currentInvitation => currentInvitation.id === invitation.id);
    
    if(result){
      result.name = invitation.name;
      result.adults = invitation.adults;
      result.children = invitation.children;
    }
    
    updateData(data);
  }

  useEffect(() => {
    getData();
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
        <InvitationForm
          showAddInvitation={showAddInvitation}
          setShowAddInvitation={setShowAddInvitation}
          showModifyInvitation={showAddInvitation}
          setShowModifyInvitation={setShowModifyInvitation}
          updateData={updateData}
          data={data}
          invitationSelected={invitationSelected}
          setInvitationSelected={setInvitationSelected}
        />
      }

      { showModifyInvitation &&
        <InvitationForm
          showAddInvitation={showAddInvitation}
          setShowAddInvitation={setShowAddInvitation}
          showModifyInvitation={showModifyInvitation}
          setShowModifyInvitation={setShowModifyInvitation}
          updateData={updateData}
          data={data}
          invitationSelected={invitationSelected}
          setInvitationSelected={setInvitationSelected}
          modifyInvitation={modifyInvitation}
        />
      }

      { showCopyMessage &&
        <CopyMessage
          setShowCopyMessage={setShowCopyMessage}
        ></CopyMessage>
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

          <h3 className="information__title">Invitaciones confrmadas</h3>

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
              id={invitation.id}
              name={invitation.name}
              adults={invitation.adults}
              children={invitation.children}
              status={invitation.state}
              code={invitation.code}
              setInvitationSelected={setInvitationSelected}
              setShowModifyInvitation={setShowModifyInvitation}
              deleteInvitation={deleteInvitation}
              setShowCopyMessage={setShowCopyMessage}
            />
          )}
        </div>
      </main>
    </>
  )
}