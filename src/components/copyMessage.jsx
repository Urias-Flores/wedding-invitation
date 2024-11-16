import { useEffect, useState } from "react"

export default function CopyMessage({setShowCopyMessage}){
  const [active, setActive] = useState(false); 

  useEffect(()=>{
    setTimeout(()=>{
      setShowCopyMessage(false)
    }, 500)
  }, [])

  return (
    <div className="copy_mesage_modal">
      <p className={`copy_message ${active && "active"}`}>
          ¡Link copiado!
      </p>
    </div>
  )
}