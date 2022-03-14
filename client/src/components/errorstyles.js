import styled from "styled-components";

export const ContError = styled.div`
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-size: 2.5rem;
  gap: 0.5rem;
`;

export const SadFace = styled.img`
  height: 10vh;
`;

export const Reload = styled.button`
  font-family: "Poppins";
  font-weight: 300;
  margin-top: 1rem;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 11px rgba(255, 255, 255, 0.4);
  }
`;
