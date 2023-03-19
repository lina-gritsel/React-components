import React from 'react'
import { shallow } from 'enzyme'
import ProductCard from './Card'

describe('ProductCard', () => {
  const product = {
    image: 'image',
    title: 'Product Title',
    price: 10,
    desc: 'Product description',
  }

  it('renders the product image', () => {
    const wrapper = shallow(<ProductCard {...product} />)
    const image = wrapper.find('.imageProduct')
    expect(image.prop('src')).toEqual(product.image)
  })

  //   it('renders the product title', () => {
  //     const wrapper = shallow(<ProductCard {...product} />)
  //     const title = wrapper.find('.title')
  //     expect(title.text()).toEqual(product.title)
  //   })

  //   it('renders the product price', () => {
  //     const wrapper = shallow(<ProductCard {...product} />)
  //     const price = wrapper.find('.price')
  //     expect(price.text()).toEqual(`${product.price}$`)
  //   })

  //   it('renders the product description', () => {
  //     const wrapper = shallow(<ProductCard {...product} />)
  //     const description = wrapper.find('.description')
  //     expect(description.text()).toEqual(product.desc)
  //   })
})
