import { FC } from 'react'

import background from '../../assets/images/form.webp'
import Layout from '../../components/Layout'
import Modal from './components/Modal'

import { CATEGORIES, NOTIFICATIONS_OPTIONS } from './constants'
import InputSelect from './components/InputSelect'
import RadioGroup from './components/RadioGroup'
import CardsList from './components/CardsList'
import InputDate from './components/InputDate'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import InputName from './components/Input'
import { useFormPage } from './hooks'

import styles from './FormsPage.module.scss'

const FormPage: FC = () => {
  const {
    handleSubmit,
    errors,
    showModal,
    cardsData,
    onSubmit,
    control,
    currentFile,
    setCurrentFile,
  } = useFormPage()

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.shadow}></div>
        <div className={styles.poster}>
          <img src={background} className={styles.background} />
          <div className={styles.mainTitle}>
            If you want to create a character, do it now
          </div>
        </div>
        <form
          role="form"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div className={styles.container}>
            <InputName
              control={control}
              placeholder="Сharacter name"
              errors={errors}
            />
            <InputDate
              control={control}
              errors={errors}
              label="date of birth"
            />
            <InputSelect
              control={control}
              options={CATEGORIES}
              errors={errors}
            />
            <FileInput
              name="file"
              control={control}
              errors={errors}
              currentFile={currentFile}
              setCurrentFile={setCurrentFile}
            />
            <Checkbox
              name="checkbox"
              control={control}
              errors={errors}
              label="Consent to the data processing"
              data-testid="check"
            />
            <RadioGroup
              name="radio"
              control={control}
              options={NOTIFICATIONS_OPTIONS}
              label="Do you want to receive notifications from us?"
            />
            <button type="submit" className={styles.button}>
              Submit
            </button>
            <Modal showModal={showModal} className={styles.modal} />
          </div>
        </form>
      </div>
      <CardsList cards={cardsData} />
    </Layout>
  )
}

export default FormPage
