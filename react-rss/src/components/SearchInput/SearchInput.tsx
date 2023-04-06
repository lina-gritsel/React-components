import React, { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Search } from '../../assets/icons'
import { submitByKeyDown } from '../../hooks'

import styles from './SearchInput.module.scss'

interface SearchInputProps {
  onChange: (value?: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
  name: string
  onSubmit: () => void
}

const SearchInput: FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder = 'Search',
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
          {/* <Search className={styles.searchIcon} /> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              onChange={onChange}
              className={styles.search}
              placeholder={placeholder}
              value={value}
            />
            <button type="submit">Find</button>
          </form>
        </div>
      )}
    />
  )
}

export default SearchInput
