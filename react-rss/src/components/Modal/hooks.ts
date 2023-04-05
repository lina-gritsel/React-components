import { useState } from 'react'

export const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false)

  return {
    visible,
    open: () => setVisible(true),
    close: () => setVisible(false),
  }
}
