import App from './App';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockFn = vi.fn();

describe('App', () => {
  it('should only trigger once', async () => {
    render(<App mockFn={mockFn} />);
    const label = screen.getByRole('combobox');
    const user = userEvent.setup();
    await user.click(label);
    expect(mockFn).toHaveBeenCalledTimes(1);
    await screen.findByRole('listbox');
  });
});
