import { FC } from 'react'

import Button from '../../components/Button'
import Layout from '../../components/Layout'
import Modal from '../../components/Modal'

import InputCategory from './components/InputCategory'
import InputBirth from './components/InputBirth'
import InputName from './components/InputName'
import CardsList from './components/CardsList'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import Switcher from './components/Switcher'
import { useFormPage } from './hooks'

import styles from './FormsPage.module.scss'

const FormPage: FC = () => {
  const {
    handleSubmit,
    form,
    name,
    errors,
    birth,
    category,
    image,
    checkbox,
    switcherPositive,
    showModal,
    cardsData,
  } = useFormPage()

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
