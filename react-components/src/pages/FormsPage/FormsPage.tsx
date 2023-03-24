import Button from '../../components/Button'
import React from 'react'

import Layout from '../../components/Layout'
import Checkbox from './components/Checkbox'
import ImageInput from './components/ImageInput'
import InputBirth from './components/InputBirth'

import InputName from './components/InputName'
import InputSelect from './components/InputSelect'
import Switcher from './components/Switcher'

import styles from './FormsPage.module.scss'

class FormsPage extends React.Component {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    alert('An essay was submitted')
    event.preventDefault()
  }

  render() {
    return (
      <Layout currentPage="Forms Page">
        <form onSubmit={this.handleSubmit}>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.title}>fill out the form</div>
              <InputName />
              <InputBirth />
              <InputSelect />
              <ImageInput />
              <Checkbox />
              <Switcher leftLabel="yes" rightLabel="no" />
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
