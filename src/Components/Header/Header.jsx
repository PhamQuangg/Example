import React from 'react'
import './Header.css'

const Header = ({movie}) => {
  if (!movie) {
    return <div></div>;
  }

  return (
    <div className="header">
        <div className="header-content">
          <img src={movie.image} alt="" />
            <h2>{movie.movieName}</h2>
            <p>{movie.description}</p>
        </div>
    </div>
  )
}
export default Header