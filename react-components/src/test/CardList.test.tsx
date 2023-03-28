import React from 'react'
import { render, screen } from '@testing-library/react'
import fetch from 'node-fetch'
import Card from '../components/CardHome'

interface Product {
  title: string
  price: number
  description: string
  image: string
}

describe('CardList', async () => {
  it('render list', async () => {
    const data = (await fetch('https://fakestoreapi.com/products').then(
      (respo) => {
        return respo.json()
      }
    )) as Product[]
    class CardList extends React.Component {
      render() {
        return data.map((item: Product, index: number) => (
          <Card key={index} {...item} />
        ))
      }
    }
    render(<CardList />)
    expect(screen.getAllByTestId('card').length).toEqual(20)
  })
})
