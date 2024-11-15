import "../styles/invitations.css"

export default function Invitations(){
    return (
      <>
        <h2 className="title">Invitaciones</h2>

        <input type="text" placeholder="buscar..." className="search"/>
        
        <div className="actions">
          <button className="action__button">Agregar</button>
          <button className="action__button">Editar</button>
          <button className="action__button">Eliminar</button>
        </div>

        <table className="table">
          <thead className="table__headers">
            <th className="header__name">Nombre</th>
            <th className="header__name">Adultos</th>
            <th className="header__name">Niños</th>
            <th className="header__name">Link</th>
          </thead>

          <tbody className="table__data">
            <tr className="register">
              <td className="register__data">Marcos Flores</td>
              <td className="register__data">4</td>
              <td className="register__data">1</td>
              <td className="register__data"><button className="register__data__button">copiar link</button></td>
            </tr>

            <tr className="register">
              <td className="register__data">Maria Barrientos Acheverria</td>
              <td className="register__data">2</td>
              <td className="register__data">3</td>
              <td className="register__data"><button className="register__data__button">copiar link</button></td>
            </tr>
          </tbody>
        </table>
      </>
    )
}