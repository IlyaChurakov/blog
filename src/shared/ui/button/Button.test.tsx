import {render, screen} from '@testing-library/react'
import { ButtonVariants, Button } from './Button';

describe('button', () => {
    test('render', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('clear', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button variant={ButtonVariants.TEXT}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('text')
    })

    test('outline', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button variant={ButtonVariants.OUTLINE}>test</Button>);
        screen.debug()
        expect(screen.getByText('test')).toHaveClass('outline')
        
    })
})