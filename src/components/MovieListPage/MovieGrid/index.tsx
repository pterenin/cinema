import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';
import { MovieType } from '../../../Types/types';
import axios from 'axios';
import { generateImgUrl, generateUrl } from '../../../unitls/urlUtils';
import "./styles.scss";

const MovieGrid: React.FC = () => {
    const [movieList, setMovieList] = useState([] as MovieType[]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = generateUrl('/3/movie/popular', page);
        axios.get(url).then(result => {
            const updatedTotalPages = result.data.total_pages;
            const movies = result.data.results;
            setTotalPages(updatedTotalPages);
            setMovieList([...movieList, ...movies]);
        });
    }

    const fetchNextPage = () => {
        setPage(page + 1);
        fetchData();
    }

    const clickHandler = (movie: MovieType) => {
        navigate("/movie", { state: { movie } });
    }

    return (
        <div className="movie-grid" id="scrollableDiv">
            <InfiniteScroll
                dataLength={movieList.length}
                next={fetchNextPage}
                hasMore={totalPages > page}
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
                scrollableTarget="scrollableDiv"
            >
                {movieList.map((movie: MovieType, i) => {
                    return <div key={movie.id + i} className="img-container" onClick={() => { clickHandler(movie) }}>
                        <img src={generateImgUrl(movie.poster_path)} alt={movie.title} />
                    </div>
                })}
            </InfiniteScroll>
        </div>
    );
};

export default MovieGrid;
