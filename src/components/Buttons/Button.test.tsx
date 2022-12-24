import { render, screen } from '@testing-library/react'
import { describe, test } from 'vitest'
import { DefaultButton } from './index'

describe('Button', () => {
  test('Render button element', () => {
    render(<DefaultButton>Testing</DefaultButton>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  describe('Render correct children', () => {
    test('render children type string', () => {
      render(<DefaultButton>testing</DefaultButton>)
      expect(screen.getByText(/Testing/i)).toBeInTheDocument()
    })
  })
})
