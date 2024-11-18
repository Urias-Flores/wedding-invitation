import { useEffect, useState } from "react"

export default function CopyMessage({setShowCopyMessage}){
  const [active, setActive] = useState(false); 

  useEffect(()=>{
    setTimeout(()=>{
      setActive(false);
    }, 1000)

    setTimeout(()=>{
      setShowCopyMessage(false);
    }, 1500)

    setActive(true)
  }, [])

  return (
    <p className={`copy_message ${active ? "active" : ""}`}>
        ¡Link copiado!
    </p>
  )
}