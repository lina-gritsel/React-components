import { useState } from 'react'

import { Character, fetchCharacter } from '@/api'
import { useModal } from '@/components/Modal'

export const useFetchCharacter = () => {
  const {
    visible: modalVisible,
    open: openModal,
    close: closeModal,
  } = useModal()

  const [selectCharacter, setSelectCharacter] = useState<Character | null>(null)

  const onCardClick = async (id: number) => {
    const characterInfo = await fetchCharacter(id)
    setSelectCharacter(characterInfo)
    
    openModal()
  }

  return {
    onCardClick,
    selectCharacter,
    modalVisible,
    closeModal,
  }
}
