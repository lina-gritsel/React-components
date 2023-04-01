import { useState } from 'react'
import { useForm } from 'react-hook-form'

export interface IErrors {
  name?: string
  date?: string
  category?: string
  file?: string
  checkbox?: string
}

export interface ICardData {
  name: string
  date: string
  category: string
  image: string
  checkbox: boolean
  radio: string
}

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
    setCardsData((prev) => [...prev, data])
    setShowModal(true)
    reset()
  }

  setTimeout(() => {
    setShowModal(false)
  }, 3000)

  return {
    handleSubmit,
    errors,
    showModal,
    cardsData,
    onSubmit,
    control,
  }
}
