import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <main>
        <section>
          <h1 className="names">
            <p className="names__title">Madai</p>
            <p className="names__title">&</p>
            <p className="names__title">Keneth</p>
          </h1>

          <div className="timer">
            <div className="timer__element">
              <p>150</p>
              <p>dias</p>
            </div>

            <div className="timer__element">
              <p>14</p>
              <p>horas</p>
            </div>

            <div className="timer__element">
              <p>30</p>
              <p>minutos</p>
            </div>

            <div className="timer__element">
              <p>6</p>
              <p>segundos</p>
            </div>
          </div>

          <h2 className="wewedding">¡Nos Casamos!</h2>

          <p className="verse">
            Y nosotros hemos conocido y creído el amor que Dios tiene para con nosotros. Dios es amor; y el que permanece en amor, permanece en Dios, y Dios en él <br />
            <span>1 Juan 4:16</span>
          </p>
        </section>

        <section>
          <h2 className="wedding-date">05 Abril 2025</h2>

          <h3 className="our-parents">Nuestro padres</h3>


          <div className="parents">
            <h4 className="parents__title">Novia</h4>
            <p className="parents__name">Coric Esmeralda Flores Osorio</p>
          </div>

          <div className="parents">
            <h4 className="parents__title">Novio</h4>
            <p className="parents__name">José Manuel Aguilar Rivas</p>
            <p className="parents__name">Fanny Yaquelin Flores Sauceda</p>
          </div>
        </section>

        <section>
          <div>
            <h3>Ceremonia</h3>
            <p>Orillas de la playa, Tela, Atlantida</p>
            <p>05:00 PM</p>

          </div>

          <div>
            <h3>Recepción</h3>

            <p>Cabaña contiguo a Hotel XXXXXX, Tela, Atlantida</p>
            <p>08:00 PM</p>

            
          </div>
        </section>

        <section>
          <h2>M&K</h2>

          <h3>Confirma tu asistencia</h3>

          <form action="POST">
            <div>
              <label htmlFor="name">Nombre</label>
              <input type="text" placeholder="Escribe tu nombre..."/>
            </div>

            <div>
              <label htmlFor="adults">Adultos</label>
              <button>UP</button>
              <input type="number" placeholder="0" id="adults" name="adults"/>
              <button>DOWN</button>
            </div>

            <div>
              <label htmlFor="children">Niños</label>
              <button>UP</button>
              <input type="number" placeholder="0" id="children" name="children"/>
              <button>DOWN</button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
