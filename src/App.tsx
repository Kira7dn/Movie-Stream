import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/scenes/home/Home";
import Movie from "@/scenes/movie";
import Navbar from "@/scenes/global/Navbar";
import Footer from "./scenes/global/Footer/Footer";
import Player from "./scenes/global/Player/Player";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Player />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:movieId" element={<Movie />} />
          <Route path="movies" element={<Home />} />
          <Route path="series" element={<Home />} />
          <Route path="cartoons" element={<Home />} />
          <Route path="tvshows" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
