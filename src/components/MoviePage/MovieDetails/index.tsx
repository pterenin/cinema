import { useEffect, useState } from "react";
import { MovieType, MovieDetailsType, VideoDetailsType } from "../../../Types/types";
import axios from 'axios';
import { generateImgUrl, genetateMovieDetailsUrl, genetateMovieVideosUrl } from '../../../unitls/urlUtils';
import "./styles.scss";
import VideoTrailer from "../VideoTrailer";

interface PropTypes {
    movieId?: string;
}

function MovieDetails({ movieId }: PropTypes) {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(null);
    const [videoDetails, setVideoDetails] = useState<VideoDetailsType[] | []>([]);

    useEffect(() => {
        if (!movieId) return setIsLoaded(true);
        const url = genetateMovieDetailsUrl(movieId);
        const videosUrl = genetateMovieVideosUrl(movieId);
        axios.get(url).then(result => {
            const data: MovieDetailsType = result.data;
            setMovieDetails(data);
            setIsLoaded(true);
        });

        axios.get(videosUrl).then(result => {
            setVideoDetails(result.data.results);
        });

    }, [movieId]);

    const getYear = () => {
        if (!movieDetails) return '';
        return new Date(movieDetails.release_date).getFullYear();
    }

    const getRating = (): string => {
        if (!movieDetails || !movieDetails?.vote_average) return '';
        return `${Math.round(movieDetails?.vote_average * 100) / 100}/10`;
    }

    const getDuration = (): string => {
        if (!movieDetails) return '';
        return `${movieDetails?.runtime} mins`;
    }

    const getImgSrc = (): string => {
        if (!movieDetails) return '';
        return generateImgUrl(movieDetails.poster_path)
    }

    if (!movieDetails && isLoaded) {
        return <div className="movie-detailes"><h1>No Movie to render. Please select a movie.</h1></div>
    }

    return (
        <div className="movie-detailes">
            <div className="sub-header">
                <h2>{movieDetails ? movieDetails.original_title : 'Error'}</h2>
            </div>

            <section className="movie-card">
                <div className="movie-info">
                    <p className="year">{getYear()}</p>
                    <p className="duration">{getDuration()}</p>
                    <p className="rating">{getRating()}</p>
                    <button onClick={() => { }} className="favorite-btn">Add to Favorite</button>
                </div>
                <img src={getImgSrc()} alt={`${movieDetails?.title} Movie Poster`} className="movie-poster" />
                <p className="movie-description">{movieDetails?.overview}</p>
            </section>
            <section className="trailers">
                <h3>TRAILERS</h3>
                {videoDetails?.length && videoDetails.map(video => {
                    return <div className="trailer" key={video.key}>
                        <VideoTrailer videoDetails={video} />
                    </div>
                })}

            </section>
        </div>
    );
}

export default MovieDetails;
