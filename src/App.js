import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mean from './components/Mean/Mean.js';
import Main from './components/Main/Main.js';
import Blog from './components/Blog/Blog.js';
import Movie from './components/Movie/Movie.js';
import Game from './components/Game/Game.js';
import Poll from './components/Poll/Poll.js';


function App() {
  



  return (
    

    // This is a random comment
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/meang">Don't Click</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/movie">Movie of the Week</Link>
              </li>
              <li className="nav-item">
                <Link to="/game">Game</Link>
              </li>
              <li className="nav-item">
                <Link to="/poll">Poll</Link>
              </li>
            </ul>
          </nav>
          
        </header>

        <Routes>
            <Route path="/" exact element={<Main></Main>} />
            <Route path="/meang" element={<Mean></Mean>} />
            <Route path="/blog" element={<Blog></Blog>} /> {/* Add route for the BlogPost component */}
            <Route path="/movie" element={<Movie></Movie>}/>
            <Route path="/game" element={<Game></Game>}/>
            <Route path="/poll" element={<Poll></Poll>}/>
          </Routes>
      </div>
    </Router>

  );
}

export default App;
