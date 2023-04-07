import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import searchIcon from '../../assets/images/search.png'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
  onChange?: (value?: React.ChangeEvent<HTMLInputElement>) => void
  value?: string
  placeholder?: string
  name: string
  onSubmit: () => void
}

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder = 'Search...',
  name,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm()
  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <div className={styles.searchWrapper}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
              onChange={onChange}
              className={styles.search}
              placeholder={placeholder}
              value={value}
            />
            <button type="submit" className={styles.button}>
              <img className={styles.icon} src={searchIcon} />
            </button>
          </form>
        </div>
      )}
    />
  )
}

export default SearchInput
