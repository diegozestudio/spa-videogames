import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardSt = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const LinkVerMas = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  color: #fff;
`;

export const ImageCard = styled.img`
  width: 250px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`;

export const TitleCard = styled.div`
  position: absolute;
  text-align: center;
  top: 1rem;
  font-size: 1.5rem;
  color: #fff;
`;

export const GenresCard = styled.div`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  margin-left: 2px;
  color: #000;
  bottom: 5px;
`;
