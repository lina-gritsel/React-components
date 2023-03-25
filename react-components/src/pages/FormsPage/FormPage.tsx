import React from 'react'

import Button from '../../components/Button'
import Layout from '../../components/Layout'

import { IErors, IState } from '../types'

import InputCategory from './components/InputCategory'
import InputBirth from './components/InputBirth'
import InputName from './components/InputName'
import CardsList from './components/CardsList'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import Switcher from './components/Switcher'

import styles from './FormsPage.module.scss'
import Modal from '../../components/Modal'

class FormPage extends React.Component<object, IState> {
  name = React.createRef<HTMLInputElement>()
  birth = React.createRef<HTMLInputElement>()
  category = React.createRef<HTMLSelectElement>()
  image = React.createRef<HTMLInputElement>()
  checkbox = React.createRef<HTMLInputElement>()
  switcherPositive = React.createRef<HTMLInputElement>()
  switcherNegative = React.createRef<HTMLInputElement>()
  form = React.createRef<HTMLFormElement>()

  constructor(props: object) {
    super(props)
    this.state = {
      cardsData: [],
      errors: {},
      showModal: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  formValidation = () => {
    const nameUser = this.name.current?.value
    const birthUser = this.birth.current?.value
    const category = this.category.current?.value
    const file = this.image.current?.value
    const checkbox = this.checkbox.current?.checked

    const errors = {} as typeof this.state.errors
    let formIsValid = true

    if (nameUser!.trim().length < 3) errors.name = 'UserName is very short'
    if (typeof nameUser !== undefined) {
      if (!nameUser?.match(/^[a-zA-Z]+$/)) errors.name = 'Only letters'
    }
    if (!nameUser) errors.name = 'Cannot be empty'
    if (!birthUser) errors.birth = 'Cannot be empty'
    if (!category) errors.category = 'Cannot be empty, choose a category'
    if (!file) errors.file = 'Cannot be empty, choose a file'
    if (!checkbox)
      errors.checkbox = 'This item is mandatory for sending the form'

    if (Object.keys(errors).length) {
      this.setState({
        errors,
      })
      formIsValid = false
    } else {
      formIsValid = true
    }
    return formIsValid
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const submitForm = () => {
      const newCard = {
        name: this.name.current?.value,
        birth: this.birth.current?.value,
        category: this.category.current?.value,
        image:
          this.image.current?.files instanceof FileList
            ? URL.createObjectURL(this.image.current.files[0])
            : '',
        checkbox: this.checkbox.current?.checked ? 'checked' : '',
        switcher: this.switcherPositive.current?.checked ? 'yes' : 'no',
      }
      const newArr = this.state.cardsData
      newArr.push(newCard)
      this.setState({ cardsData: newArr })
    }
    if (this.formValidation()) {
      submitForm()
      this.form.current?.reset()
      const errors = this.state.errors
      Object.keys(errors).forEach((key) => delete errors[key as keyof IErors])
      this.setState({
        errors,
        showModal: true,
      })
      setTimeout(() => {
        this.setState({ showModal: false })
      }, 2000)
    }
  }

  render() {
    return (
      <Layout currentPage="Forms Page">
        <form role="form" onSubmit={this.handleSubmit} ref={this.form}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.title}>fill out the form</div>
              <InputName forwardedRef={this.name} />
              <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
              <InputBirth forwardedRef={this.birth} />
              <span style={{ color: 'red' }}>{this.state.errors['birth']}</span>
              <InputCategory forwardedRef={this.category} />
              <span style={{ color: 'red' }}>
                {this.state.errors['category']}
              </span>
              <FileInput forwardedRef={this.image} />
              <span style={{ color: 'red' }}>{this.state.errors['file']}</span>
              <Checkbox forwardedRef={this.checkbox} />
              <span style={{ color: 'red' }}>
                {this.state.errors['checkbox']}
              </span>
              <Switcher
                forwardedRefPos={this.switcherPositive}
                forwardedRefNeg={this.switcherNegative}
                leftLabel="yes"
                rightLabel="no"
              />
              <div className={styles.wrapperButton}>
                <Button />
              </div>
            </div>
          </div>
        </form>
        <CardsList cards={this.state.cardsData} />
        <Modal showModal={this.state.showModal} />
      </Layout>
    )
  }
}

export default FormPage
