import { useNavigate, useParams } from 'react-router-dom';
import Header from "../Layout/Header";
import MovieDetails from './MovieDetails';


function Movie() {
    const navigate = useNavigate();
    const { movie_id } = useParams();

    const onButtonClick = () => {
        navigate('/');
    }

    return (
        <>
            <Header title="Movie Details" showButton onButtonClick={onButtonClick} />
            <MovieDetails movieId={movie_id} />
        </>
    );
}

export default Movie;
