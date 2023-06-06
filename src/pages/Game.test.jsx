import { describe, it, expect } from 'vitest';
import { vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Game from './Game';

describe('Game', () => {
  it('renders the "Play" button if isPlaying is false', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );
    const playButton = getByText('Play');
    expect(playButton).toBeInTheDocument();
  });

  it('renders the instructions if isPlaying is true and hideNumbers is true', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Game />
      </MemoryRouter>
    );
    const playButton = getByText('Play');
    fireEvent.click(playButton);

    const instructionsElement = await waitFor(() => getByText(/Memoriza las cartas/i));
    expect(instructionsElement).toBeInTheDocument();
  });
});
