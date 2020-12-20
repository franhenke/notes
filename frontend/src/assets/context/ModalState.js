import React, { useRef, useState, useEffect } from 'react'
import ModalContext from './ModalContexts'

export function ModalState({ children }) {
  const modalRef = useRef()
  const [context, setContext] = useState()

  useEffect(() => {
    setContext(modalRef.current)
  }, [])

  return (
    <div className="modal-container">
      <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </div>
  )
}
