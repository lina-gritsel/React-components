import { render } from '@testing-library/react'
import Card from '../pages/HomePage/components/Card/Card'

describe('Card component', () => {
  const testProps = {
    id: 1,
    image: 'https://example.com/image.jpg',
    name: 'Example name',
    status: 'Example status',
    species: 'Example species',
    onClick: () => {}
   }

  it('renders Card component without crashing', () => {
    render(<Card {...testProps} />)
  })

  it('renders image correctly', async () => {
    const { getByAltText } = await render(<Card {...testProps} />)
    const image = getByAltText('image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg')
  })

  test('renders title correctly', async () => {
    const { getByText } = await render(<Card {...testProps} />)
    const name = getByText(`${testProps.name}`)
    expect(name).toBeInTheDocument()
  })

  test('renders price correctly', async () => {
    const { getByText } = await render(<Card {...testProps} />)
    const status = getByText('Example status')
    expect(status).toBeInTheDocument()
  })
})
