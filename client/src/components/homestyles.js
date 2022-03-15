import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
to {
  transform: rotate(360deg);
}
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
  /* flex-grow: 1; */
`;

export const Loading = styled.div`
  width: 10rem;
  height: 10rem;
  border: 3px solid #333;
  border-radius: 50%;
  border-top-color: #fff;
  animation: 1s ${spin} infinite ease-in-out;
`;

export const NavBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  width: 100%;
  padding: 0 5%;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

export const NavBottomRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const NavTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8vh;
  padding: 0 5%;
  background: linear-gradient(0deg, #a60000 0%, #0b0b0b 100%);
`;

export const NavTopRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const SelectCosas = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background-color: #fff;
  border-radius: 45px;
  flex-grow: 1;
  margin-right: 2rem;
`;

export const ContLoading = styled.div`
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Joystick = styled.img`
  align-self: flex-start;
  height: 55px;
`;

export const Hamburger = styled.img`
  height: 30px;
  cursor: pointer;
  margin-left: 2rem;
`;

export const Reload = styled.img`
  border-radius: 50%;
  height: 30px;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    box-shadow: 0px 0px 7px rgba(255, 255, 255, 0.4);
  }
`;

export const LinkHome = styled(Link)`
  align-self: flex-start;
`;

export const Gamepad = styled.img`
  height: 30px;
`;

export const SelectFiltros = styled.select`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  color: #000;
  font-family: "Poppins";
  font-weight: 400;
  flex-grow: 1;
`;

export const FlechitaAbajo = styled.img`
  height: 15px;
`;

export const FlechitaArriba = styled.img`
  cursor: pointer;
  height: 30px;
  margin-right: 2px;
`;
