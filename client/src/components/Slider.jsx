import React, { useEffect, useRef } from "react";
import img1 from "../assets/slide11.jpg";
import img2 from "../assets/slide22.jpg";
import img3 from "../assets/slide33.jpg";
import img4 from "../assets/slide44.jpg";
import {
  ContenedorPrincipal,
  ContenedorSlideShow,
  Slide,
  ImagenSlide,
  LinktoHome,
  ContLink,
  Iconos,
  Boton,
} from "./sliderstyles";
import flechaizquierda from "../assets/angle-left.svg";
import flechaderecha from "../assets/angle-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { setAutoplay } from "../redux/actions";

export default function Slider() {
  const autoplay = useSelector((state) => state.autoplay);
  const dispatch = useDispatch();

  const slideshow = useRef(null);

  const siguiente = () => {
    try {
      if (autoplay && slideshow.current.children.length > 0) {
        // Obtenemos el primer elemento del slideshow
        const primerElemento = slideshow.current.children[0];
        // Establecemos la transicion para el slideshow
        slideshow.current.style.transition = `1200ms ease-out all`;
        const tamañoSlide = slideshow.current.children[0].offsetWidth;
        // Movemos el slideshow
        slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
        const transicion = () => {
          // Reiniciamos la posicion del SlideShow
          slideshow.current.style.transition = "none";
          slideshow.current.style.transform = `translateX(0)`;
          // Tomamos el primer elemento y lo mandamos al final
          slideshow.current.appendChild(primerElemento);
          slideshow.current.removeEventListener("transitionend", transicion);
        };
        // EventListener para cuando termina la animacion
        slideshow.current.addEventListener("transitionend", transicion);
      }
    } catch (err) {}
  };

  const anterior = () => {
    if (autoplay && slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );
      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
      setTimeout(() => {
        slideshow.current.style.transition = `1200ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    dispatch(setAutoplay(true));
    if (autoplay) {
      setInterval(() => {
        siguiente();
      }, 5000);
    }
  }, [autoplay, dispatch, siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideShow ref={slideshow}>
        <Slide>
          <ImagenSlide src={img1} alt="" />
        </Slide>
        <Slide>
          <ImagenSlide src={img2} alt="" />
        </Slide>
        <Slide>
          <ImagenSlide src={img3} alt="" />
        </Slide>
        <Slide>
          <ImagenSlide src={img4} alt="" />
        </Slide>
      </ContenedorSlideShow>
      <ContLink>
        <Boton onClick={anterior}>
          <Iconos src={flechaizquierda} />
        </Boton>
        <LinktoHome to="/home">START</LinktoHome>
        <Boton onClick={siguiente}>
          <Iconos src={flechaderecha} />
        </Boton>
      </ContLink>
    </ContenedorPrincipal>
  );
}
