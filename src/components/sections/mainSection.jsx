import DownArrow from "../downarrow.jsx";
import Timer from "../timer.jsx";

export default function MainSection(){
  return (
    <section>
      <h1 className="names">
        <p className="names__title">Kenneth</p>
        <p className="names__title">&</p>
        <p className="names__title">Madai</p>
      </h1>

      <Timer />

      <h2 className="wewedding">¡Nos Casamos!</h2>

      <p className="verse">
        Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él <br />
        <span>1 Juan 4:16</span>
      </p>

      <DownArrow />
    </section>
  )
}
