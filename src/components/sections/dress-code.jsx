import {useRef, useEffect, useState} from "react";

export default function DressCode(){
  const containerRef = useRef(null);
  const centerElementRef = useRef(null);
  const [imageShowing, setImageShowing] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const centerElement = centerElementRef.current;

    if (container && centerElement) {
      const containerWidth = container.offsetWidth;
      const elementWidth = centerElement.offsetWidth;
      const elementOffsetLeft = centerElement.offsetLeft;
  
      container.scrollLeft = elementOffsetLeft - (containerWidth / 2) + (elementWidth / 2);
    }
  }, []);

  const showPoints = () => {
    const examples = document.querySelectorAll('.dress-code__image-example');
    const container = document.querySelector('.dress-code__examples');
    const containerRect = container.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerRight = containerRect.right;

    // Iterar sobre cada imagen
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
    <section className="dress-code">
      <div className="dress-code__titles">
        <h2>Vestimenta</h2>
        <p>Si no tienes idea de como asistir a una boda en la playa aqui tienes algunos ejemplos :)</p>
      </div>
      
      <div className="dress-code__examples" ref={containerRef} onScroll={()=>{showPoints()}}>
        <div className="example">
          <img src="/dress-code/vh-9.jpeg" alt="vh-9" className="dress-code__image-example" id="-9"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-8.jpeg" alt="vh-8" className="dress-code__image-example" id="-8"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-7.jpeg" alt="vh-7" className="dress-code__image-example" id="-7"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-6.jpg" alt="vh-6" className="dress-code__image-example" id="-6"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-5.jpg" alt="vh-5" className="dress-code__image-example" id="-5"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-4.jpg" alt="vh-4" className="dress-code__image-example" id="-4"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-3.jpg" alt="vh-3" className="dress-code__image-example" id="-3"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-2.jpg" alt="vh-2" className="dress-code__image-example" id="-2"/>
        </div>

        <div className="example">
          <img src="/dress-code/vh-1.jpg" alt="vh-1" className="dress-code__image-example" id="-1"/>
        </div>

        <div className="example center" ref={centerElementRef} id="0">
          <h2 className="example__title dress-code__image-example" id="0">Dress Code</h2>
          <div className="example__buttons">
            <a className="example__button--women" href="#1">
              <p className="example__button__text">Mujeres</p>
              <img src="/double-chevron-right.svg" alt="image" className="example__button__image"/>
            </a>

            <div className="dress-code__icons">
              <div className="dress-code__set">
                <img src="/dress-code/Summer Hat.png" alt="clothe" className="clothe summer-hat"/>

                <img src="/dress-code/Dress.png" alt="clothe" className="clothe dress"/>

                <img src="/dress-code/Women Shoes.png" alt="clothe" className="clothe women-shoes"/>
              </div>

              <div className="dress-code__set">
                <img src="/dress-code/Shirt.png" alt="clothe" className="clothe shirt"/>

                <img src="/dress-code/Trousers.png" alt="clothe" className="clothe trouser"/>

                <img src="/dress-code/Shoes.png" alt="clothe" className="clothe shoes"/>
              </div>
            </div>

            <a className="example__button--men" href="#-1">
              <img src="/double-chevron-left.svg" alt="image" className="example__button__image"/>
              <p className="example__button__text">Hombres</p>
            </a>
          </div>
        </div>

        <div className="example">
          <img src="/dress-code/vm-1.jpg" alt="vm-1" className="dress-code__image-example" id="1"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-2.jpg" alt="vm-2" className="dress-code__image-example" id="2"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-3.jpg" alt="vm-3" className="dress-code__image-example" id="3"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-4.jpg" alt="vm-4" className="dress-code__image-example" id="4"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-5.jpg" alt="vm-5" className="dress-code__image-example" id="5"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-6.jpg" alt="vm-6" className="dress-code__image-example" id="6"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-7.jpg" alt="vm-7" className="dress-code__image-example" id="7"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-8.jpeg" alt="vm-8" className="dress-code__image-example" id="8"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-9.jpeg" alt="vm-9" className="dress-code__image-example" id="9"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-10.jpeg" alt="vm-10" className="dress-code__image-example" id="10"/>
        </div>

        <div className="example">
          <img src="/dress-code/vm-11.jpeg" alt="vm-11" className="dress-code__image-example" id="11"/>
        </div>
      </div>

      <div className={`points-container${imageShowing !== 0 ? "--active" : ""}`}>
        <div className={`point${imageShowing === 1 || imageShowing === -9 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 2 || imageShowing === -8 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 3 || imageShowing === -7 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 4 || imageShowing === -6 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 5 || imageShowing === -5 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 6 || imageShowing === -4 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 7 || imageShowing === -3 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 8 || imageShowing === -2 ? "--active" : ""}`}></div>
        <div className={`point${imageShowing === 9 || imageShowing === -1 ? "--active" : ""}`}></div>
        { imageShowing > 0 &&
          <>
            <div className={`point${imageShowing === 10 ? "--active" : ""}`}></div>
            <div className={`point${imageShowing === 11 ? "--active" : ""}`}></div>
          </>
        }
      </div>
    </section>
  )
}