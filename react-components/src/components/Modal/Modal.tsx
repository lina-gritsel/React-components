import React from 'react'

import styles from './Modal.module.scss'

interface ModalProps {
  showModal: boolean
  className?: string
}

class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <div
        className={this.props.showModal ? styles.showModal : styles.hideModal}
      >
        Card
        <br /> is <br /> created
      </div>
    )
  }
}

export default Modal
