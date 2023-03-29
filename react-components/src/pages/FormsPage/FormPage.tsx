import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import InputCategory from './components/InputSelect'
import InputBirth from './components/InputDate'
import InputName from './components/Input'
import CardsList from './components/CardsList'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import Switcher from './components/RadioButton'
import { useFormPage } from './hooks'

import styles from './FormsPage.module.scss'

const FormPage: FC = () => {
  const {
    handleSubmit,
    // form,
    // name,
    errors,
    // birth,
    // category,
    // image,
    // checkbox,
    // switcherPositive,
    showModal,
    cardsData,
    onSubmit,
    control,
  } = useFormPage()

  return (
    <Layout currentPage="Forms Page">
      <form role="form" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.container}>
          <div className={styles.title}>fill out the form</div>
          <InputName
            name="name"
            type="text"
            control={control}
            placeholder="Your name"
            errors={errors}
          />
          <InputBirth
            name="data"
            type="date"
            control={control}
            errors={errors}
          />
          <InputCategory />
          <FileInput />
          <Checkbox data-testid="check" />
          <Switcher leftLabel="yes" rightLabel="no" />
          <div className={styles.wrapperButton}>
            <Button />
          </div>
          <Modal showModal={showModal} className={styles.modal} />
        </div>
      </form>
      <CardsList cards={cardsData} />
    </Layout>
  )
}

export default FormPage
