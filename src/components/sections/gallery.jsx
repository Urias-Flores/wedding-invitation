import {useEffect, useState} from "react";

import DownArrow from "../downarrow.jsx";

export default function Gallery() {
  const [imageShowing, setImageShowing] = useState(1);
  const [currentImage, setCurrentImage] = useState("/gallery/pro-O35zuOix.jpeg");
  const [isFading, setIsFading] = useState(false);

  const images = [
    "/gallery/pro-O35zuOix.jpeg",
    "/gallery/pro-58mOs2B6.jpeg",
    "/gallery/pro-6N8T1Rh2.jpeg",
    "/gallery/pro-kN87OrZ7.jpeg",
    "/gallery/pro-IOoGM1Ed.jpeg",
    "/gallery/pro-tPEGhvnc.jpeg",
    "/gallery/pro-4i0lcbgm.jpeg",
    "/gallery/pro-uOq26Nxd.jpeg",
    "/gallery/pro-OU0BO64m.jpeg"
  ]

  //images[imageShowing - 1]

  const showPoints = () => {
    const examples = document.querySelectorAll('.gallery__item');
    const container = document.querySelector('.gallery__container');
    const containerRect = container.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerRight = containerRect.right;

    examples.forEach(example => {
      const containerRect = example.getBoundingClientRect();
      if (
        containerRect.left >= containerLeft &&
        containerRect.right <= containerRight
      ) {
        setImageShowing(parseInt(example.id));
      }
    });
  }

  useEffect(() => {
    setIsFading(true);
    const timeout = setTimeout(() => {
      setCurrentImage(images[imageShowing - 1])
      setIsFading(false);
    }, 300)
    return () => clearTimeout(timeout);
  }, [imageShowing]);


  return (
    <section
      className="gallery__section"
    >
      <div
        className={`gallery__filter ${isFading ? "fading" : ""}`}
        style={
          {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }
        }
      ></div>

      <h1 className="gallery__title">¡Nuestra Galeria!</h1>

      <div
        className="gallery__container"
        onScroll={showPoints}
      >
        { images.map((image, index) => (
          <div className="gallery__item" id={`${index + 1}`} key={index}>
            <img src={image} alt="image" className="gallery__image"/>
          </div>
        ))
        }
      </div>

      <div className={`points-container--active`}>
        <div className={`point${imageShowing === 1 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 2 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 3 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 4 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 5 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 6 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 7 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 8 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 9 ? "--active" : ""}`}></div>
      </div>

      <DownArrow />
    </section>
  )
}
