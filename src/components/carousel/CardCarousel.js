import { useState } from "react"

const CardCarousel = ({ movie }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <video className="video" controls>
          <source src={movie.thumbnail} type="video/mp4" />
        </video>
      )}

      {isShown && (
        <>
          <video className="video" controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="info-box">
            <p>{movie.title}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CardCarousel
