import { RefObject, useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  cb: () => void
) => {
  const onClick = ({ target }: { target: EventTarget | null }) => {
    if (ref.current && !ref.current.contains(target as Node)) {
      cb()
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
    }
  })
}
