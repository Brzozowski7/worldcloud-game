import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
`;

export const CongratulationsText = styled.p`
  text-align: center;
`;

export const ScoreWrapper = styled.p`
  color: ${pallete.Blue};
`;
