import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home', () => {
  it('renders the input field', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const inputElement = getByPlaceholderText('Nombre');
    expect(inputElement).toBeInTheDocument();
  });

  it('updates the name state on input change', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const inputElement = getByPlaceholderText('Nombre');
    fireEvent.change(inputElement, { target: { value: 'John' } });
    expect(inputElement.value).toBe('John');
  });

  it('displays an error message if the name is empty', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const buttonElement = getByText('Jugar');
    fireEvent.click(buttonElement);
    const errorElement = getByText('Añade un nombre válido de 2 letras o más');
    expect(errorElement).toBeInTheDocument();
  });

  it('displays an error message if the name is less than 2 characters', () => {
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const inputElement = getByPlaceholderText('Nombre');
    const buttonElement = getByText('Jugar');
    fireEvent.change(inputElement, { target: { value: 'A' } });
    fireEvent.click(buttonElement);
    const errorElement = getByText('Añade un nombre válido de 2 letras o más');
    expect(errorElement).toBeInTheDocument();
  });

  /*   it('navigates to the game page if the name is valid', () => {
    const navigateMock = vi.fn();
    const { getByText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Home navigate={navigateMock} />
      </MemoryRouter>
    );
    const inputElement = getByPlaceholderText('Nombre');
    const buttonElement = getByText('Jugar');
    fireEvent.change(inputElement, { target: { value: 'John' } });
    fireEvent.click(buttonElement);
    expect(navigateMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith('/game');
  }); */
});
