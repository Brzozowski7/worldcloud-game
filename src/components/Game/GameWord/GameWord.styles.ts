import styled from "styled-components";
import { pallete } from "../../../misc/pallete";
import { guessWordColor } from "./GameWord.utils";

export const Wrapper = styled.div<{ width?: number; gameOn: boolean }>`
  display: flex;
  width: ${(props) => `${props.width}%`};
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: ${(props) => (props.gameOn ? "pointer" : "default")};
  }
`;

export const Word = styled.p<{
  isClicked: boolean;
  isCorrect: boolean;
  isWrong: boolean;
}>`
  padding: 6px;
  color: ${(props) =>
    guessWordColor(props.isCorrect, props.isWrong, props.isClicked)};
`;

export const CorrectAnswerIndicator = styled.p`
  color: ${pallete.DarkGreen};
`;

export const WrongAnswerIndicator = styled.p`
  color: ${pallete.LightRed};
`;
