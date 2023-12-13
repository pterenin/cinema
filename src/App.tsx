
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieListPage";
import Movie from "./components/MoviePage";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MovieList />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
