import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import ModalContext from '../../assets/context/ModalContexts'

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(ModalContext)

  return modalNode
    ? ReactDOM.createPortal(
        <div className="overlay">
          <div className="modal-dialog" {...props}>
            {children}
            <button onClick={onClose}>Close</button>
          </div>
        </div>,
        modalNode
      )
    : null
}
