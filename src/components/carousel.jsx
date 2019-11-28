import React, { useState, useEffect } from "react"
import "./carousel.css"
export const Carousel = () => {
  const [isVisible, setVisible] = useState(false)

  const handleCloseClicked = () => {
    setVisible(false)
  }

  useEffect(() => {
    console.log("SET ")
    window.displayCarousel = () => {
      setVisible(true)
    }

    return () => {
      window.displayCarousel = undefined
    }
  }, [])

  return isVisible ? (
    <div className="overlay">
      <a className="closebtn" onClick={handleCloseClicked}>
        &times;
      </a>
      <div className="overlay-content">
        <img src="/static/ded793c48bfdce5f14ead3c5e33c2a7c/0741c/river.jpg" />
        <div className="controls">
          <span className="carousel-arrow left-arrow">&#9656;</span>
          <span className="carousel-arrow">&#9656;</span>
          <span className="carousel-arrow">&#9679;&#9679;&#9679;</span>
        </div>
      </div>
    </div>
  ) : null
}
