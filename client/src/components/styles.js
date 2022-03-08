import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const LinktoHome = styled(Link)`
  top: 45vh;
  left: 60vw;
  padding: 1rem 3rem;
  text-decoration: none;
  font-size: 4rem;
  font-family: "Bebas Neue", cursive;
  font-weight: 600;
  background: linear-gradient(45deg, transparent 5%, #ff013c 5%);
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px #00e6f6;
  position: relative;
  &:hover {
    background: linear-gradient(45deg, transparent 5%, #000 5%);
    box-shadow: 6px 0px 0px #ff013c;
  }
`;

export const LinkVerMas = styled(Link)`
  position: relative;
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
`;

export const FondoVermas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.5vw;
  height: 5vh;
  background-color: #fff;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

const spin = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: rgb(0, 0, 0);
  animation: 1s ${spin} infinite ease-in-out;
`;

export const HomeSt = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1400px;
  padding: 40px 0;
`;

export const ContCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const CardSt = styled.div``;
