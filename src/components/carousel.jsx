import React, { useState, useEffect } from "react"
import "./carousel.css"
export const Carousel = () => {
  const images = Array.from(
    document.getElementsByClassName("gatsby-resp-image-image")
  ).map(el => el.src)
  const [isVisible, setVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleCloseClicked = () => {
    setVisible(false)
  }

  const displayImage = value => {
    let index = currentIndex + value
    if (index < 0) {
      index = images.length - 1
    } else if (index >= images.length) {
      index = 0
    }
    setCurrentIndex(index)
  }

  useEffect(() => {
    window.displayCarousel = () => {
      setVisible(true)
    }

    return () => {
      window.displayCarousel = undefined
    }
  }, [])

  useEffect(() => {
    if (images.length <= 1) {
      return
    }

    const timeoutId = setTimeout(() => {
      displayImage(+1)
    }, 5000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  const displayImageIndicators = () => {
    return images.map((el, index) => {
      return (
        <span
          className={
            index === currentIndex
              ? "carousel-dot selected-dot"
              : "carousel-dot"
          }
        >
          &#9679;
        </span>
      )
    })
  }

  return isVisible ? (
    <div className="overlay">
      <a className="closebtn" onClick={handleCloseClicked}>
        &times;
      </a>
      <div className="overlay-content">
        <div
          className="carousel-arrow case-left"
          onClick={() => {
            displayImage(-1)
          }}
        >
          &#9656;
        </div>
        <img src={images[currentIndex]} />
        <div
          className="carousel-arrow case-right"
          onClick={() => {
            displayImage(+1)
          }}
        >
          &#9656;
        </div>
        <div className="dots">{displayImageIndicators()}</div>
      </div>
    </div>
  ) : null
}
