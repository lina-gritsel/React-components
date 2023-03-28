import { render } from '@testing-library/react'
import Card from '../components/CardHome/CardHome'

describe('Card component', () => {
  const testProps = {
    image: 'https://example.com/image.jpg',
    title: 'Example title',
    desc: 'Example description',
    price: 20,
  }

  it('renders Card component without crashing', () => {
    render(<Card {...testProps} />)
  })

  it('renders image correctly', async () => {
    const { getByAltText } = await render(<Card {...testProps} />)
    const image = getByAltText('imageProduct')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  test('renders title correctly', async () => {
    const { getByText } = await render(<Card {...testProps} />)
    const title = getByText(`${testProps.title}`)
    expect(title).toBeInTheDocument()
  })

  test('renders price correctly', async () => {
    const { getByText } = await render(<Card {...testProps} />)
    const price = getByText('20$')
    expect(price).toBeInTheDocument()
  })
})
