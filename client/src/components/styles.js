import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const spin = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const Loading = styled.div`
  position: absolute;
  left: 46%;
  top: 40%;
  width: 10rem;
  height: 10rem;
  border: 3px solid #333;
  border-radius: 50%;
  border-top-color: #fff;
  animation: 1s ${spin} infinite ease-in-out;
`;

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
  row-gap: 30px;
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
  background: linear-gradient(0deg, #a60000 0%, #0b0b0b 100%);
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
  height: 55px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
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
  border-radius: 45px;
`;

export const ContDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  margin: 2rem auto;
  width: 1200px;
  border-radius: 5rem;
  /* background-color: #333; */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 2rem 0;
`;

export const TitleDetail = styled.div`
  font-size: 3rem;
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

export const SubTitleDetail = styled.div`
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: "Poppins";
`;

export const LineDetail = styled.div`
  display: flex;
  gap: 1rem;
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

export const ContForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  margin: 4rem auto;
  width: 800px;
  border-radius: 5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 4rem 0;
`;

export const InputForm = styled.input`
  width: 500px;
  background-color: transparent;
  color: #fff;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  border: none;
  outline: none;
`;

export const DivInputForm = styled.div`
  border: 1px solid #fff;
  padding: 13px 20px;
  border-radius: 45px;
`;

export const SelectForm = styled.select`
  width: 500px;
  background-color: transparent;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DivSelectForm = styled.div`
  border: 1px solid #fff;
  padding: 13px 20px;
  border-radius: 45px;
  background-color: #fff;
`;

export const ErrorForm = styled.div`
  font-family: "Poppins";
  font-weight: 300;
  font-size: 14px;
  color: #fff;
`;

export const CrearForm = styled.button`
  text-decoration: none;
  border: 1px solid #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-family: "Poppins";
  background-color: #fff;
  color: #000;
  transition: 0.25s;
  margin: 1rem 0 0;
  cursor: pointer;
  &:enabled:hover {
    box-shadow: 0px 0px 11px rgba(255, 255, 255, 0.4);
  }
  &:disabled {
    opacity: 25%;
  }
  &:disabled:hover {
    opacity: 25%;
    box-shadow: 0px 0px 11px rgba(166, 0, 0, 1);
  }
`;

export const ContSelecciones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 600px;
  gap: 1rem;
  margin: auto;
`;

export const BtnEliminar = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: "Poppins";
  font-weight: 300;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 10px 20px;
  border-radius: 25px;
`;

export const Equis = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-weight: 600;
`;

export const Ffform = styled.form`
  display: flex;
  gap: 0.5rem;
`;

export const LinkVolver = styled(Link)`
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 300;
  color: #fff;
  opacity: 75%;
`;
