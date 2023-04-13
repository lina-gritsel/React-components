import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../store/hooks/redux'
import { addNewForm } from '../../store/reducers/forms'

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
  file: string
  checkbox: string
  radio: string
}

export const useFormPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICardData>({ mode: 'onBlur' })

  const [showModal, setShowModal] = useState<boolean>(false)
  const [currentFile, setCurrentFile] = useState<string>('')

  const storeForms = useAppSelector((state) => state.forms.forms)
  const dispatch = useDispatch()

  const onSubmit = (data: ICardData) => {
    reset()
    setCurrentFile('')

    const filePath = URL.createObjectURL(
      data.file[0] as unknown as Blob
    ).toString()
    const correctData = { ...data, file: filePath }

    dispatch(addNewForm(correctData))
    setShowModal(true)

    setTimeout(() => {
      setShowModal(false)
    }, 3000)
  }

  return {
    handleSubmit,
    errors,
    showModal,
    cardsData: storeForms,
    onSubmit,
    control,
    currentFile,
    setCurrentFile,
  }
}
