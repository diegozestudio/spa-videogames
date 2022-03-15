import { Link } from "react-router-dom";
import styled from "styled-components";

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

export const DivInputForm = styled.div`
  border: 1px solid #fff;
  padding: 13px 20px;
  border-radius: 45px;
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

export const ContSelecciones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 600px;
  gap: 1rem;
  margin: auto;
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

export const LinkVolver = styled(Link)`
  text-decoration: none;
  font-family: "Poppins";
  font-weight: 300;
  color: #fff;
  opacity: 75%;
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
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;
