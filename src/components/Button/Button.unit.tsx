import Button from './Button'

import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Button unit testing', () => {
  test('Button should rendered', () => {
    render(<Button>click me</Button>)

    expect(screen.getByTestId('button')).toHaveTextContent('click me')
  })
})