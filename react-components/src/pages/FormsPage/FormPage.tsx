import { FC } from 'react'

import Layout from '../../components/Layout'
import Modal from '../../components/Modal'
import ShopImage from '../../assets/images/shop.jpg'

import InputSelect from './components/InputSelect'
import RadioGroup from './components/RadioGroup'
import CardsList from './components/CardsList'
import InputDate from './components/InputDate'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import InputName from './components/Input'
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
    currentFile,
    setCurrentFile,
  } = useFormPage()

  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.poster}>
          <div className={styles.shadow}></div>
          <img src={ShopImage} className={styles.shopImage} alt="shop" />
          <div className={styles.mainTitle}>
            You can order online - just fill out the form
          </div>
        </div>
        <form
          role="form"
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div className={styles.container}>
            {/* <div className={styles.title}>fill out the form</div> */}
            <InputName
              name="name"
              control={control}
              placeholder="Your name"
              errors={errors}
            />
            <InputDate
              name="date"
              control={control}
              errors={errors}
              label="date of birth"
            />
            <InputSelect
              name="category"
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
