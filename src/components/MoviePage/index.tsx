import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import MovieDetails from './MovieDetails';


function Movie() {
    const navigate = useNavigate();
    const location = useLocation();
    const movie = location?.state?.movie;

    const onButtonClick = () => {
        navigate('/');
    }

    return (
        <>
            <Header title="Movie Details" showButton onButtonClick={onButtonClick} />
            <MovieDetails movie={movie} />
        </>
    );
}

export default Movie;
