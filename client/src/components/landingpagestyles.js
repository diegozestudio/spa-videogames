import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinktoHome = styled(Link)`
  position: relative;
  top: 40vh;
  left: 60vw;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 6rem;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  background: linear-gradient(45deg, transparent 5%, #a60000 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #f0f0f2;
  transition: 0.25s;
  &:hover {
    background: linear-gradient(45deg, transparent 5%, #17204d 5%);
    box-shadow: 6px 0px 0px #a60000;
  }
`;

export const ImageBack = styled.img`
  position: absolute;
  max-width: 100%;
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: blur(2px);
`;

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000;
  top: 0;
  left: 0;
  opacity: 50%;
`;
