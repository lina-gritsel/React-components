import { FC } from 'react'

import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import InputSelect from './components/InputSelect'
import InputDate from './components/InputDate'
import InputName from './components/Input'
import CardsList from './components/CardsList'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import RadioGroup from './components/RadioGroup'
import { useFormPage } from './hooks'

import styles from './FormsPage.module.scss'
import { CATEGORIES, NOTIFICATIONS_OPTIONS } from './constants'

const FormPage: FC = () => {
  const {
    handleSubmit,
    errors,
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
            control={control}
            placeholder="Your name"
            errors={errors}
            label="enter your name"
          />
          <InputDate
            name="date"
            control={control}
            errors={errors}
            label="date of birth"
          />
          <InputSelect
            name="categories"
            control={control}
            options={CATEGORIES}
            errors={errors}
            label="What do you want to order?"
          />
          <FileInput name="file" control={control} label="Add image" />
          <Checkbox
            name="checkbox"
            control={control}
            label="Consent to the data processing"
            data-testid="check"
          />
          <RadioGroup
            name="radio"
            control={control}
            options={NOTIFICATIONS_OPTIONS}
            label="Do you want to receive notifications from us?"
          />
          <div className={styles.wrapperButton}>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
          <Modal showModal={showModal} className={styles.modal} />
        </div>
      </form>
      <CardsList cards={cardsData} />
    </Layout>
  )
}

export default FormPage
