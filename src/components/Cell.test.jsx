import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';

import Cell from './Cell';
import { render, fireEvent } from '@testing-library/react';

describe('Cell', () => {
  it('renders the number if hideNumbers is false', () => {
    const { getByText } = render(<Cell number={5} selectedNumber={5} secretNumber={7} hideNumbers={false} onClick={() => {}} />);
    const numberElement = getByText('5');
    expect(numberElement).toBeInTheDocument();
  });

  it('renders "?" if hideNumbers is true', () => {
    const { getByText } = render(<Cell number={5} selectedNumber={5} secretNumber={7} hideNumbers={true} onClick={() => {}} />);
    const questionMarkElement = getByText('?');
    expect(questionMarkElement).toBeInTheDocument();
  });

  it('adds the "found" class if the selectedNumber is equal to the secretNumber and number', () => {
    const { container } = render(<Cell number={5} selectedNumber={5} secretNumber={5} hideNumbers={false} onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('found');
  });

  it('adds the "incorrect" class if the selectedNumber is not equal to the secretNumber but equal to the number', () => {
    const { container } = render(<Cell number={5} selectedNumber={5} secretNumber={7} hideNumbers={false} onClick={() => {}} />);
    expect(container.firstChild).toHaveClass('incorrect');
  });

  it('calls the onClick function when the cell is clicked', () => {
    const onClickMock = vi.fn();
    const { container } = render(<Cell number={5} selectedNumber={5} secretNumber={7} hideNumbers={false} onClick={onClickMock} />);
    fireEvent.click(container.firstChild);
    expect(onClickMock).toHaveBeenCalledWith(5);
  });
});
