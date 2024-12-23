import {render, screen} from '@testing-library/react'
import { ButtonVariants, Button } from './Button';

describe('button', () => {
    test('render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('clear', () => {
        render(<Button variant={ButtonVariants.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear')
    })

    test('outline', () => {
        render(<Button variant={ButtonVariants.OUTLINE}>test</Button>);
        screen.debug()
        expect(screen.getByText('test')).toHaveClass('outline')
        
    })
})