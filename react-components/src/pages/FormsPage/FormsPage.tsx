import Button from '../../components/Button'
import React from 'react'

import Layout from '../../components/Layout'
import Checkbox from './components/Checkbox'
import FileInput from './components/FileInput'
import InputBirth from './components/InputBirth'

import InputName from './components/InputName'
import InputCategory from './components/InputCategory'
import Switcher from './components/Switcher'

import styles from './FormsPage.module.scss'

interface ICardData {
  name?: string
  birth?: string
  category?: string
  image?: string
  checkbox?: string
  switcher?: string
}

interface IState {
  cardData: ICardData[]
}

class FormsPage extends React.Component<object, IState> {
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
      cardData: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('An essay was submitted')
    event.preventDefault()

    const submitForm = () => {
      const newCard = {
        name: this.name.current?.value,
        birth: this.birth.current?.value,
        category: this.category.current?.value,
        image: this.image.current?.value,
        checkbox: this.checkbox.current?.value,
        switcher: this.switcherPositive.current?.checked ? 'yes' : 'no',
      }
      const newArr = this.state.cardData
      newArr.push(newCard)
      this.setState({ cardData: newArr })
    }
    submitForm()
  }

  render() {
    console.log(this.state.cardData)

    return (
      <Layout currentPage="Forms Page">
        <form onSubmit={this.handleSubmit} ref={this.form}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.title}>fill out the form</div>
              <InputName forwardedRef={this.name} />
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
      </Layout>
    )
  }
}

export default FormsPage
