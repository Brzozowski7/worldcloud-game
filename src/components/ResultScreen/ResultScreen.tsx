import { useSelector, useDispatch } from "react-redux";
import { restartGame } from "../../redux/slices/gameSlice";
import ActionBtn from "../ActionBtn";
import {
  Wrapper,
  CongratulationsText,
  ScoreWrapper,
} from "./ResultScreen.styles";

export default function ResultScreen() {
  const { username, score } = useSelector(({ game }: IStore) => game);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(restartGame());
  };

  return (
    <Wrapper data-testid="resultScreenWrapper">
      <CongratulationsText>
        Congratulations, {username}! <br /> Your score:
      </CongratulationsText>
      <ScoreWrapper>{score} points</ScoreWrapper>
      <ActionBtn onClick={handleClick}>restart game</ActionBtn>
    </Wrapper>
  );
}
