import {render, screen} from '@testing-library/react'
import { ButtonVariants, Button } from './Button';

describe('button', () => {
  test('render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('clear', () => {
    render(<Button variant={ButtonVariants.TEXT}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('text')
  })

  test('outline', () => {
    render(<Button variant={ButtonVariants.OUTLINE}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('outline')
        
  })
})