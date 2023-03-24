import React from 'react'

interface InputBirthProps {
  forwardedRef: React.RefObject<HTMLInputElement>
}

class FileInput extends React.Component<InputBirthProps, {}> {
  listenerSelectedFile = () => {}
  render() {
    return <input type="file" ref={this.props.forwardedRef} />
  }
}

export default FileInput
