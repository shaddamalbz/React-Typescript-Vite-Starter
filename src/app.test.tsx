import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('Render React + Vite with Airbnb style guide', () => {
    render(<App />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'React + Vite with Airbnb style guide'
    )
  })
})
