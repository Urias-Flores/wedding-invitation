import { generateCode } from "../utils/helpers";

export const getData = async () => {
  try {
    const response = await fetch(`/api/data`)

    if(response.ok){
      return await response.json();
    }
    return {code: -1, message: 'Ha ocurrido un error al obtener la informacion del servidor'}
  } catch (exception) {
    console.log(exception)
    return {code: -1, message: 'No se ha podido establecer conexion con el servidor'}
  }
}

export const getCurrentIndex = async () => {
  const data = await getData();
  return data.currentIndex;
}
  
export const updateData = async (newData) => {
  try {
    const response = await fetch(`/api/data`, {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(newData)
    })

    if(response.ok){
        return { code: 1, message: 'complete'}
    }
    return { code: -1, message: 'Ha ocurrido un error al acceder a los datos'}
  } catch (exception) {
    console.log(exception)
    return { code: -1, message: 'No se ha podido establecer conexion con el servidor'}
  }
}

export const getInvitations = async () => {
  const data = await getData();
  return data.invitations;
}

export const getInvitationByCode = async (code) => {
  const invitations = await getInvitations();
  const result = invitations.filter(invitation => invitation.code === code);

  if(result.length === 0){
    return null;
  }
  return result[0];
}

export const addInvitation = async (invitation) => {
  const data = await getData();

  invitation.code = generateCode(10);
  invitation.id = data.currentIndex;
  const newInvitations = [invitation, ...data.invitations];

  data.invitations = newInvitations;
  data.currentIndex = data.currentIndex + 1;

  return updateData(data);
}

export const updateInvitation = async (invitation) => {
  const data = await getData();

  const result = data.invitations.find(currentInvitation => currentInvitation.id === invitation.id);
  
  if(result){
    result.name = invitation.name;
    result.adults = invitation.adults;
    result.children = invitation.children;

    return updateData(data);
  }
  
  return {code: -1, message: 'No se ha podido obtener la invitacion seleccionada'}
}

export const deleteInvitation = async (id) => {
  const data = await getData();
  const newInvitations = data.invitations.filter(invitation => invitation.id != id)

  if(newInvitations){
    data.invitations = newInvitations;
    return updateData(data);
  }

  return {code: -1, message: 'No se ha podido obtener la invitacion seleccionada'}
}

const setInvitationState = async (code, state) => {
  const data = await getData();
  const invitation = data.invitations.find(currentInvitation => currentInvitation.code === code);

  if(invitation){
    invitation.state = state

    return updateData(data)
  }

  return {code: -1, message: 'El codigo de invitacion es invalido'}
}

export const confirmInvitation = async (code) =>  {
  return await setInvitationState(code, 1)
}

export const cancelInvitation = async (code) =>  {
  return await setInvitationState(code, 0);
}