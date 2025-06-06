import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    componentRender(<Sidebar />);
    const togglebtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(togglebtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
