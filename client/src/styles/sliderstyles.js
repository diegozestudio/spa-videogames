import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContenedorPrincipal = styled.div`
  position: relative;
  height: 100vh;
`;
export const ContenedorSlideShow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
`;
export const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: 0.3s ease all;
`;

export const ImagenSlide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LinktoHome = styled(Link)`
  color: #fff;
  font-size: 5rem;
  text-decoration: none;
  padding: 10px 70px;
  border-radius: 150px;
  background: linear-gradient(
    18deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    background: linear-gradient(0deg, #a60000 0%, #0b0b0b 100%);
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.2);
    transform: scale(1.03);
  }
`;

export const ContLink = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  top: 0;
  background-color: #0b0b0b90;
  width: 100%;
  height: 100%;
`;

export const Boton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const Iconos = styled.img`
  width: 50px;
  height: 50px;
  opacity: 50%;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 100%;
  }
`;
