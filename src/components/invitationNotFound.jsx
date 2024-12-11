import Timer from "./timer.jsx"

export default function InvitationNotFound(){
  return(
    <section>
      <h1 className="names">
        <p className="names__title">Kenneth</p>
        <p className="names__title">&</p>
        <p className="names__title">Madai</p>
      </h1>

      <Timer />

      <h2 className="error_frame__error_text">
        Ups... Al parecer ha ocurrido un error o no se ha encontrado la invitación.
      </h2>
    </section>
  )
}
