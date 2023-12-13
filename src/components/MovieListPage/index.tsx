

import Header from "../Layout/Header";
import MovieGrid from "./MovieGrid";
import { API_KEY } from '../../unitls/urlUtils';

function MovieListPage() {
    if (!API_KEY) {
        return <>
            <h1>API KEY is not correct</h1>
            <h2>Please provide API KEY in "src/unitls/urlUtils.ts"</h2>
        </>

    }
    return (
        <>
            <Header title="Popular Movies" />
            <MovieGrid />
        </>
    );
}

export default MovieListPage;
