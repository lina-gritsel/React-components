import React from 'react'

import Button from '../../components/Button'
import Layout from '../../components/Layout'

import InputCategory from './components/InputCategory'
import InputBirth from './components/InputBirth'
import InputName from './components/InputName'
import FileInput from './components/FileInput'
import Checkbox from './components/Checkbox'
import Switcher from './components/Switcher'

import styles from './FormsPage.module.scss'
import CardsList from './components/CardsList'
import { IState } from '../types'

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
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  formValidation = () => {
    const nameUser = this.name.current?.value
    const errors = {} as typeof this.state.errors
    let formIsValid = true
    if (nameUser!.trim().length < 3) {
      formIsValid = false
      errors.name = 'UserName is very short'
    }
    if (typeof nameUser !== undefined) {
      if (!nameUser?.match(/^[a-zA-Z]+$/)) {
        formIsValid = false
        errors.name = 'Only letters'
      }
    }
    if (!nameUser) {
      formIsValid = false
      errors.name = 'Cannot be empty'
    }
    this.setState({ errors })
    return formIsValid
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (this.formValidation()) {
      alert('Form submitted')
    } else {
      alert('Form has errors.')
    }
    event.preventDefault()
    const isValid = this.formValidation()

    const submitForm = () => {
      const newCard = {
        name: this.name.current?.value,
        birth: this.birth.current?.value,
        category: this.category.current?.value,
        image:
          this.image.current?.files instanceof FileList
            ? URL.createObjectURL(this.image.current.files[0])
            : '',
        checkbox: this.checkbox.current?.value,
        switcher: this.switcherPositive.current?.checked ? 'yes' : 'no',
      }
      const newArr = this.state.cardsData
      newArr.push(newCard)
      this.setState({ cardsData: newArr })
    }
    if (isValid) {
      submitForm()
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
              <InputCategory forwardedRef={this.category} />
              <FileInput forwardedRef={this.image} />
              <Checkbox forwardedRef={this.checkbox} />
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
      </Layout>
    )
  }
}

export default FormPage
