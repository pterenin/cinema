import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieDetails from './index';

// Mock the axios module
jest.mock('axios');

describe('MovieDetails', () => {
    const mockMovie = {
        "adult": false,
        "backdrop_path": "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
        "belongs_to_collection": null,
        "budget": 125000000,
        "genres": [
            {
                "id": 35,
                "name": "Comedy"
            },
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 14,
                "name": "Fantasy"
            }
        ],
        "homepage": "https://www.wonkamovie.com",
        "id": 787699,
        "imdb_id": "tt6166392",
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full",
        "popularity": 1117.04,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "production_companies": [
            {
                "id": 174,
                "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
                "name": "Warner Bros. Pictures",
                "origin_country": "US"
            },
            {
                "id": 79,
                "logo_path": "/at4uYdwAAgNRKhZuuFX8ShKSybw.png",
                "name": "Village Roadshow Pictures",
                "origin_country": "US"
            },
            {
                "id": 437,
                "logo_path": "/nu20mtwbEIhUNnQ5NXVhHsNknZj.png",
                "name": "Heyday Films",
                "origin_country": "GB"
            },
            {
                "id": 214904,
                "logo_path": "/9S6xSAsUiE1zuKzxayco7fD0p26.png",
                "name": "The Roald Dahl Story Company",
                "origin_country": "GB"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "GB",
                "name": "United Kingdom"
            },
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2023-12-06",
        "revenue": 43200000,
        "runtime": 117,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Every good thing in this world started with a dream.",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.099,
        "vote_count": 111
    };

    beforeEach(() => {
        axios.get.mockResolvedValue({ data: mockMovie });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders movie details correctly', async () => {
        render(<MovieDetails movieId={mockMovie.id} />);

        await waitFor(() => {
            expect(screen.getByText('Wonka')).toBeInTheDocument();
            expect(screen.getByText('2023')).toBeInTheDocument(); // Year
            expect(screen.getByText('117 mins')).toBeInTheDocument(); // Duration
            expect(screen.getByText('7.1/10')).toBeInTheDocument(); // Rating
            expect(screen.getByText('Willy Wonka – chock-full')).toBeInTheDocument(); // Movie overview
            expect(screen.getByAltText('Wonka Movie Poster')).toBeInTheDocument(); // Movie poster
        });
    });

    it('handles missing movie details gracefully', async () => {
        // Mock Axios to return empty data
        axios.get.mockResolvedValue({ data: {} });

        render(<MovieDetails movie={{}} />);

        await waitFor(() => {
            expect(screen.queryByText('Wonka')).not.toBeInTheDocument();
            expect(screen.queryByText(/\/10/)).not.toBeInTheDocument(); // Rating should not be rendered
        });
    });
});
