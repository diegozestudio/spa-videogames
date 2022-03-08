import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const LinktoHome = styled(Link)`
  top: 34.5rem;
  left: 31rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
