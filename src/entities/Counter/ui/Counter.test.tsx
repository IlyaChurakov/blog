import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('button', () => {
  test('increment', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 0 }}});

    const increment = screen.getByTestId('increment')
    fireEvent.click(increment)

    const value = screen.getByTestId('value-title')
    expect(value).toHaveTextContent('1')
  })

  test('decrement', () => {
    componentRender(<Counter/>, { initialState: { counter: { value: 0 }}});

    const decrement = screen.getByTestId('decrement')
    fireEvent.click(decrement)

    const value = screen.getByTestId('value-title')
    expect(value).toHaveTextContent('-1')
  })
})