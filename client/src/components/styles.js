import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

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
  position: relative;
  transition: 0.25s;
  &:hover {
    background: linear-gradient(45deg, transparent 5%, #17204d 5%);
    box-shadow: 6px 0px 0px #a60000;
  }
`;

export const LinkVerMas = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  color: #fff;
`;

export const FondoVermas = styled.div`
  position: absolute;
  background-color: #00000080;
  width: 250px;
  height: 400px;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0%;
  transition: 0.25s;
  &:hover {
    opacity: 100%;
  }
`;

export const ContGenres = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  width: 250px;
  border-radius: 0px 0px 20px 20px;
`;

export const ContName = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 250px;
  height: 150px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  border-radius: 19px 19px 0px 0px;
`;

export const ContCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 200px;
  column-gap: 40px;
  row-gap: 20px;
`;

export const CardSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;

  background: linear-gradient(180deg, #a60000 0%, #0b0b0b 100%);
`;

export const NavTopRight = styled.div`
  display: flex;
  width: 655px;
  justify-content: space-between;
  margin-right: 5rem;
  align-items: center;
  column-gap: 2rem;
`;

export const NavBottomRight = styled.div`
  display: flex;
  margin-right: 5rem;

  align-items: center;
  column-gap: 2rem;
`;

export const NavBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: linear-gradient(0deg, #0b0b0b 3.05%, #17204c 100%);
`;

export const DivNewGame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 25px;
`;

export const LinkNewGame = styled(Link)`
  font-family: "Poppins";
  font-weight: 400;
  text-decoration: none;
  color: #a60000;
`;

export const SelectCosas = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 15px;
`;
