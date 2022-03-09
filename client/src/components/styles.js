import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const HomeSt = styled.div`
  width: 80%;
  margin: auto;
  max-width: 1400px;
  padding: 40px 0;
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
  border: 3px solid #333;
  border-radius: 50%;
  border-top-color: #fff;
  animation: 1s ${spin} infinite ease-in-out;
`;

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
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  text-decoration: none;
  color: #fff;
`;

export const FondoVermas = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin-bottom: 14px;
  justify-content: center;
  width: 12.5vw;
  height: 40vh;
  bottom: 66px;
  background-color: #000;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  opacity: 0%;
  transition: 0.3s;
  &:hover {
    opacity: 50%;
  }
`;

export const ContGenres = styled.div`
  position: relative;
  bottom: 80px;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5vw;
  height: 4vh;
  background-color: #fff;
`;

export const ContName = styled.div`
  width: 12.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContCards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  /* row-gap: 15px; */
`;

export const CardSt = styled.div`
  display: flex;
  flex-direction: column;
`;
