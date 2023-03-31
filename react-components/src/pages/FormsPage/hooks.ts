import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { ICardData } from '../types'

export const useFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICardData>({
    mode: 'onBlur',
  })

  const [cardsData, setCardsData] = useState<ICardData[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  const onSubmit = (data: ICardData) => {
    console.log(data)
    reset()
    setCardsData((prev) => [...prev, data])
  }

  return {
    handleSubmit,
    errors,
    showModal,
    cardsData,
    onSubmit,
    control,
  }
}
