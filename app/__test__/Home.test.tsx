import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '@/app/page';

describe('Home', () => {
  it('Should Have Learn Text', () => {
    // Arrange
    render(<Home />);

    // Act
    const LearnText = screen.getByText('Learn');

    // Assert
    expect(LearnText).toBeInTheDocument();
  });
});
