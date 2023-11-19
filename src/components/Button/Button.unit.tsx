import { render, screen } from '@testing-library/react'
import { expect, test, describe } from 'vitest'
import Button from './Button'

describe('Button unit testing', () => {
  test('Button should rendered', () => {
    render(<Button>click me</Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('click me')
  })
})