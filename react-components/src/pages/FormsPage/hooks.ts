import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ICardData } from '../types'

export const useFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      date: '',
      categories: '',
      file: '',
      checkbox: false,
      radio: '',
    },
  })

  const [cardsData, setCardsData] = useState<ICardData[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)

  const onSubmit = (data: any) => {
    console.log(data)
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
