import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Movie from './index';
import { useNavigate, useLocation } from 'react-router-dom';

// Mocking Header and MovieDetails Components
jest.mock('../Layout/Header', () => (props) => <div data-testid="header" {...props} />);
jest.mock('./MovieDetails', () => (props) => <div data-testid="movie-details" {...props} />);

// Mocking useNavigate and useLocation hooks from react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
    useLocation: jest.fn(),
}));

describe('Movie', () => {
    const mockNavigate = jest.fn();
    const mockLocation = {
        state: { movie: { id: 1, title: 'Test Movie' } }
    };

    beforeEach(() => {
        useNavigate.mockImplementation(() => mockNavigate);
        useLocation.mockImplementation(() => mockLocation);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders Header and MovieDetails components with correct props', () => {
        render(<Movie />);

        const header = screen.getByTestId('header');
        const movieDetails = screen.getByTestId('movie-details');
        expect(header).toHaveAttribute('title', 'Movie Details');
    });
});
