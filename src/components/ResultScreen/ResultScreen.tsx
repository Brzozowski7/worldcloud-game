import { useSelector } from "react-redux";
import {
  Wrapper,
  CongratulationsText,
  ScoreWrapper,
} from "./ResultScreen.styles";

export default function ResultScreen() {
  const { username, score } = useSelector(({ game }: IStore) => game);
  return (
    <Wrapper>
      <CongratulationsText>
        Congratulations, {username}! <br /> Your score:
      </CongratulationsText>
      <ScoreWrapper>{score} points</ScoreWrapper>
    </Wrapper>
  );
}
