import AnimatedText from "../AnimatedText.jsx";

export default function Gift(){
  return (
    <section>
      <div>
        <AnimatedText
          text={"¡Acompañanos!"}
          className={"wedding-date"}
        />
        <p className="gift__text">Para nosotros sera un placer tenerte en nuestra boda</p>
      </div>

      <div>
        <p className="gift__paragraph">
          Si tiene buenos deseos para con nosotros y pretendes hacernos un presente prefeririamos que fuese en
          efectivo
        </p>

        <img src="/gift.png" alt="gift" className="gift__img"/>
      </div>
    </section>
  )
}
