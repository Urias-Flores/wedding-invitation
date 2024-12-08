import {useState} from "react";

import AnimatedText from "../AnimatedText.jsx";

export default function Galery() {
  const [imageShowing, setImageShowing] = useState(1);

  const images = [
    "/galery/pro-O35zuOix.jpeg",
    "/galery/pro-58mOs2B6.jpeg",
    "/galery/pro-6N8T1Rh2.jpeg",
    "/galery/pro-kN87OrZ7.jpeg",
    "/galery/pro-IOoGM1Ed.jpeg",
    "/galery/pro-tPEGhvnc.jpeg",
    "/galery/pro-4i0lcbgm.jpeg",
    "/galery/pro-uOq26Nxd.jpeg",
    "/galery/pro-OU0BO64m.jpeg"
  ]

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

  return (
    <section
      className="gallery__section"
    >
      <div className="gallery__filter" style={
        {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${images[imageShowing - 1]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "background 0.3s ease",
        }
      }></div>

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
    </section>
  )
}
