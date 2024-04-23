import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';
import Test from '../Test';

describe('Home', () => {
  it('Should Have Learn Text', () => {
    // Arrange
    render(<Home />);
    //

    // Act
    const LearnText = screen.getByText('Learn');

    // api test
    expect(LearnText).toBeInTheDocument();
  });

  it('msw test', async () => {
    const { container } = render(<Test />);
    const text = await screen.findByText(/hello/i);
    expect(text).toHaveTextContent('hello');
  });
});
