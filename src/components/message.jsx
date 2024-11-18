import { useEffect, useState } from "react"

export default function Message({reload, setMessageState, text, icon}){
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setShow(true);
  }, [])

  const hideFrame = ()=>{
    reload();
    setTimeout(()=>{
      setMessageState("");
    }, 500);
    setShow(false);
  }

  const icons = {
    "success": "check.svg",
    "error": "error.svg",
    "delete": "trash.svg",
  }

  return (
    <div className="modal">
      <div className={`frame ${ show && "active"}`}>
        <img 
          src="/x.svg" 
          alt="x" 
          className="close_button"
          onClick={()=>{
            hideFrame();
          }}
        />

        <img src={icons[icon]} alt="image" className="frame__image"/>

        <p className="frame__text">{text}</p>

        <button 
          className="frame__button message"
          onClick={()=>{hideFrame()}}
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}