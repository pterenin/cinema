import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import MovieGrid from './index';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the axios module
jest.mock('axios');

// Mock useNavigate
const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}));

const mockMoviesData = [
    {
        "adult": false,
        "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
        "genre_ids": [
            80,
            18,
            36
        ],
        "id": 466420,
        "original_language": "en",
        "original_title": "Killers of the Flower Moon",
        "overview": "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
        "popularity": 2057.537,
        "poster_path": "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
        "release_date": "2023-10-18",
        "title": "Killers of the Flower Moon",
        "video": false,
        "vote_average": 7.669,
        "vote_count": 1338
    },
    {
        "adult": false,
        "backdrop_path": "/ixhr0YVs0Du0fPIYQSYYOIf3j0R.jpg",
        "genre_ids": [
            878,
            28
        ],
        "id": 854648,
        "original_language": "en",
        "original_title": "Robot Apocalypse",
        "overview": "An expert hacker is targeted by a sentient AI after she realizes the threat it poses, and she must try to stay off its radar long enough to stop it.",
        "popularity": 1126.392,
        "poster_path": "/zpbgktIR7GkOS83PBAzLlzLSQ5W.jpg",
        "release_date": "2021-07-26",
        "title": "Robot Apocalypse",
        "video": false,
        "vote_average": 3.9,
        "vote_count": 12
    }
];


describe('MovieGrid', () => {
    const mockMovies = {
        data: {
            results: mockMoviesData,
            total_pages: 2
        }
    };

    beforeEach(() => {
        // Clear all mocks
        jest.clearAllMocks();
        // Set up the mock response for axios
        axios.get.mockResolvedValue(mockMovies);
    });

    it('fetches movies on component mount and displays them', async () => {
        render(
            <Router>
                <MovieGrid />
            </Router>
        );

        // Wait for the movies to be fetched and rendered
        await waitFor(() => {
            expect(screen.getByAltText('Killers of the Flower Moon')).toBeInTheDocument();
            expect(screen.getByAltText('Robot Apocalypse')).toBeInTheDocument();
        });
    });

    it('navigates to movie detail page on movie click', async () => {
        render(
            <Router>
                <MovieGrid />
            </Router>
        );

        // Wait for the movies to be rendered
        await waitFor(() => {
            const firstMovie = screen.getByAltText('Killers of the Flower Moon');
            act(() => {
                firstMovie.click();
            });
        });

        expect(mockedNavigate).toHaveBeenCalledWith(`/movie/${mockMoviesData[0].id}`);
    });

});
