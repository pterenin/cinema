export const API_KEY = ''; // Add your valid API key
export const baseUrl = 'https://api.themoviedb.org';
export const baseImgUrl = 'https://image.tmdb.org/t/p/';

export const SIZES = {
    original: "original",
    extraSmall: "w92",
    small: "w154",
    medium: "w185",
    big: "w342"
}

export const generateUrl = (path: string, page: number = 1): string => {
    return `${baseUrl}${path}?api_key=${API_KEY}&page=${page}&sort_by=popularity.desc`
}

export const generateImgUrl = (path: string, size: string = SIZES.medium): string => {
    return `${baseImgUrl}${size}${path}`;
}

export const genetateMovieDetailsUrl = (movieId: number) => {
    return `${baseUrl}/3/movie/${movieId}?api_key=${API_KEY}`
}
export const genetateMovieVideosUrl = (movieId: number) => {
    return `${baseUrl}/3/movie/${movieId}/videos?api_key=${API_KEY}`
}
