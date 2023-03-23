import React from 'react'

class ImageInput extends React.Component {
  state = {
    selectedFile: null,
  }
  listenerSelectedFile = () => {}
  render() {
    return <input type="file" onChange={this.listenerSelectedFile} />
  }
}

export default ImageInput
