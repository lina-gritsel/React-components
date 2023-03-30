import { FC } from 'react'

import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import InputSelect from './components/InputSelect'
import InputDate from './components/InputDate'
import InputName from './components/Input'
import CardsList from './components/CardsList'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import Switcher from './components/RadioButton'
import { useFormPage } from './hooks'

import styles from './FormsPage.module.scss'
import { OPTIONS_VALUES } from './components/InputSelect/constants'

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
            control={control}
            type="text"
            placeholder="Your name"
            errors={errors}
            label="enter your name"
          />
          <InputDate
            name="date"
            control={control}
            type="date"
            errors={errors}
            label="date of birth"
          />
          <InputSelect
            name="categories"
            control={control}
            options={OPTIONS_VALUES}
            errors={errors}
            label="What do you want to order?"
          />
          <FileInput
            name="file"
            control={control}
            type="file"
            label="Add image"
          />
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
