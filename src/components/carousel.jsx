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
      <a class="closebtn" onClick={handleCloseClicked}>
        &times;
      </a>
      <div class="overlay-content">
        <img src="/static/ded793c48bfdce5f14ead3c5e33c2a7c/0741c/river.jpg" />
        <div class="carousel-arrow left-arrow">&#10148;</div>
        <div class="carousel-arrow">&#10148;</div>
      </div>
    </div>
  ) : null
}
