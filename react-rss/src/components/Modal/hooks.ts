import { useState } from 'react'
import { useLockedBody } from '../../hooks'

export const useModal = () => {
  const [setLocked] = useLockedBody()

  const [visible, setVisible] = useState<boolean>(false)

  const open = () => {
    setVisible(true)
    setLocked(true)
  }

  const close = () => {
    setVisible(false)
    setLocked(false)
  }

  return {
    visible,
    open,
    close,
  }
}
