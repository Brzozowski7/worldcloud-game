import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Question = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const WordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  border: 1px solid ${pallete.Black};
  padding: 12px;
  gap: 4px;
  width: 70%;
`;

export const CheckBtn = styled.button`
  background-color: ${pallete.White};
  color: ${pallete.Blue};
  border: 1px solid ${pallete.Blue};
  border-radius: 4px;
  padding: 8px 20px;
  &:hover {
    cursor: pointer;
  }
`;
