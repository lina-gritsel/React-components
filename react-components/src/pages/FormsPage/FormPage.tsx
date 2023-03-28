import React, { FC, useRef, useState } from 'react'

import Button from '../../components/Button'
import Layout from '../../components/Layout'

import { ICardData, IErors } from '../types'

import InputCategory from './components/InputCategory'
import InputBirth from './components/InputBirth'
import InputName from './components/InputName'
import CardsList from './components/CardsList'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import Switcher from './components/Switcher'

import styles from './FormsPage.module.scss'
import Modal from '../../components/Modal'

const FormPage: FC = () => {
  const [cardsData, setCardsData] = useState<ICardData[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [errors, setErrors] = useState<IErors>({})

  const name = useRef<HTMLInputElement>(null)
  const birth = useRef<HTMLInputElement>(null)
  const category = useRef<HTMLSelectElement>(null)
  const image = useRef<HTMLInputElement>(null)
  const checkbox = useRef<HTMLInputElement>(null)
  const switcherPositive = useRef<HTMLInputElement>(null)
  const form = useRef<HTMLFormElement>(null)

  const formValidation = () => {
    const nameUser = name.current?.value
    const birthUser = birth.current?.value
    const currentCategory = category.current?.value
    const file = image.current?.value
    const currentCheckbox = checkbox.current?.checked

    const currentErrors = {} as typeof errors
    let formIsValid = true

    if (nameUser!.trim().length < 3) errors.name = 'UserName is very short'
    if (typeof nameUser !== undefined) {
      if (!nameUser?.match(/^[a-zA-Z]+$/)) errors.name = 'Only letters'
    }
    if (!nameUser) currentErrors.name = 'Cannot be empty'
    if (!birthUser) currentErrors.birth = 'Cannot be empty'
    if (!currentCategory)
      currentErrors.category = 'Cannot be empty, choose a category'
    if (!file) currentErrors.file = 'Cannot be empty, choose a file'
    if (!currentCheckbox)
      currentErrors.checkbox = 'This item is mandatory for sending the form'

    if (Object.keys(currentErrors).length) {
      setErrors(currentErrors)
      formIsValid = false
    } else {
      formIsValid = true
    }
    return formIsValid
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const submitForm = () => {
      const newCard = {
        name: name.current?.value,
        birth: birth.current?.value,
        category: category.current?.value,
        image:
          image.current?.files instanceof FileList
            ? URL.createObjectURL(image.current.files[0])
            : '',
        checkbox: checkbox.current?.checked ? 'checked' : '',
        switcher: switcherPositive.current?.checked ? 'yes' : 'no',
      }
      const newArr = cardsData
      newArr.push(newCard)
      setCardsData(newArr)
    }
    if (formValidation()) {
      submitForm()
      form.current?.reset()
      const allErrors = errors
      Object.keys(allErrors).forEach(
        (key) => delete allErrors[key as keyof IErors]
      )
      setErrors(errors)
      setShowModal(true)
      setTimeout(() => {
        setShowModal(false)
      }, 2000)
    }
  }

  return (
    <Layout currentPage="Forms Page">
      <form role="form" onSubmit={(event) => handleSubmit(event)} ref={form}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>fill out the form</div>
            <InputName innerRef={name} />
            <span className={styles.errorMessage}>{errors.name}</span>
            <InputBirth innerRef={birth} />
            <span className={styles.errorMessage}>{errors.birth}</span>
            <InputCategory innerRef={category} />
            <span className={styles.errorMessage}>{errors.category}</span>
            <FileInput innerRef={image} />
            <span className={styles.errorMessage}>{errors.file}</span>
            <Checkbox innerRef={checkbox} data-testid="check" />
            <span className={styles.errorMessage}>{errors.checkbox}</span>
            <Switcher
              innerRef={switcherPositive}
              leftLabel="yes"
              rightLabel="no"
            />
            <div className={styles.wrapperButton}>
              <Button />
            </div>
          </div>
          <Modal showModal={showModal} className={styles.modal} />
        </div>
      </form>
      <CardsList cards={cardsData} />
    </Layout>
  )
}

export default FormPage
