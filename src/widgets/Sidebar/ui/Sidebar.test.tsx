import {fireEvent, screen} from '@testing-library/react'
import Sidebar from './Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('sidebar', () => {
    test('render', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle', () => {
        renderWithTranslation(<Sidebar/>);
        const togglebtn = screen.getByTestId('sidebar-toggle')
        fireEvent.click(togglebtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})