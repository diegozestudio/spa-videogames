import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const ContErrorDetail = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div`
  width: 10rem;
  height: 10rem;
  border: 3px solid #333;
  border-radius: 50%;
  border-top-color: #fff;
  animation: 1s ${spin} infinite ease-in-out;
`;

export const BoxShadow = styled.div`
  font-family: "Poppins";
  font-weight: 300;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
`;

export const LinkDetail = styled(Link)`
  text-decoration: none;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: "Poppins";
  background-color: #fff;
  color: #000;
  transition: 0.25s;
  &:hover {
    box-shadow: 0px 0px 11px rgba(255, 255, 255, 0.4);
  }
`;

export const ContDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: justify;
  margin: 2rem auto;
  width: 1200px;
  border-radius: 5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 2rem 0;
`;

export const TitleDetail = styled.div`
  font-size: 3rem;
  color: #fff;
`;

export const ImageDetail = styled.img`
  width: 1200px;
  height: 600px;
  object-fit: cover;
  object-position: top;
`;

export const DetailDetail = styled.div`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.8);
  padding: 1rem 5rem;
`;

export const SubTitleDetail = styled.div`
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: "Poppins";
`;

export const LineDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

export const ListDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

export const DateRating = styled.div`
  display: flex;
  gap: 2rem;
`;

export const BotonEliminar = styled.div`
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: "Poppins";
  &:hover {
    background-color: #a6000099;
    color: #fff;
    cursor: pointer;
    border: none;
  }
`;
