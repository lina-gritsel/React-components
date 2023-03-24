import React from 'react'

interface FileInputProps {
  forwardedRef?: React.RefObject<HTMLInputElement>
}

class FileInput extends React.Component<FileInputProps, {}> {
  listenerSelectedFile = () => {}
  render() {
    return <input type="file" ref={this.props.forwardedRef} />
  }
}

export default FileInput
