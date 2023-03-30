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
import RadioButoon from './components/RadioButton'
import { useFormPage } from './hooks'

import styles from './FormsPage.module.scss'
import { OPTIONS_VALUES } from './components/InputSelect/constants'
import { NOTIFACATIONS } from './constants'
import { useRadioButton } from './components/RadioButton/hooks'

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

  const { radioValue, onRadioValueChange } = useRadioButton()

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
          <Checkbox
            name="checkbox"
            control={control}
            type="checkbox"
            label="Consent to the data processing"
            data-testid="check"
          />
          <RadioButoon
            name="radio"
            control={control}
            type="radio"
            options={NOTIFACATIONS}
            currentOption={{ label: radioValue, value: radioValue }}
            onOptionChange={onRadioValueChange}
            label="Do you want to receive notifications from us?"
          />
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
