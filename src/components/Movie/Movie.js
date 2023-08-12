import React from 'react';
import './Movie.css'; // Import the CSS file

function Movie() {
  return (
    <div className="movie-page">
      <div className="movie-container">
        <video controls className="movie-player">
          <source src={"movie/movie.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="movie-title">Harry Potter and the Half Blood Prince</h1>
      <p className="movie-description">
      Harry Potter returns to Hogwarts for his sixth year--to face a growing danger that may be more than a match for his strengthening powers as a wizard . . .While Death Eaters emboldened by the return of Lord Voldemort wreak havoc in both the Muggle and Wizarding worlds, Harry suspects new dangers lie within Hogwarts
      </p>
    </div>
  );
}

export default Movie;
