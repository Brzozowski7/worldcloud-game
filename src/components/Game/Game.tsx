import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, Question, WordsWrapper } from "./Game.styles";
import useGetWords from "./useGetWords";
import { checkAnswers, checkScore, capitalizeFirstLetter } from "./Game.utils";
import GameWord from "./GameWord";
import ActionBtn from "../ActionBtn/ActionBtn";
import { stopGame, setScore } from "../../redux/slices/gameSlice";

export default function Game() {
  const dispatch = useDispatch();
  const { gameOn } = useSelector(({ game }: IStore) => game);
  const { words, error, loading } = useGetWords();
  const [chosenWords, setChosenWords] = useState<string[]>([]);
  const [checkedAnswers, setCheckedAnswers] = useState({
    correctAnswers: [] as string[],
    wrongAnswers: [] as string[],
  });

  const handleCheckBtnClick = () => {
    dispatch(stopGame());
    const { userCorrectAnswers, userWrongAnswers } = checkAnswers(
      chosenWords,
      words?.good_words
    );
    setCheckedAnswers({
      correctAnswers: userCorrectAnswers,
      wrongAnswers: userWrongAnswers,
    });
  };

  const handleFinishBtnClick = () => {
    const score = checkScore(
      checkedAnswers.correctAnswers.length,
      checkedAnswers.wrongAnswers.length,
      words.good_words.length
    );
    dispatch(setScore(score));
  };

  return (
    <Wrapper data-testid="gameWrapper">
      {error && "Unexpected error occurred."}
      {loading ? (
        "Loading..."
      ) : (
        <Question>{capitalizeFirstLetter(words?.question)}</Question>
      )}
      <WordsWrapper>
        {words?.all_words.map((item) => (
          <GameWord
            isCorrect={checkedAnswers.correctAnswers.includes(item)}
            isWrong={checkedAnswers.wrongAnswers.includes(item)}
            key={item}
            isClicked={chosenWords.includes(item)}
            chosenWords={chosenWords}
            setChosenWords={setChosenWords}
            word={item}
          />
        ))}
      </WordsWrapper>
      {gameOn && (
        <ActionBtn onClick={handleCheckBtnClick}>check answers</ActionBtn>
      )}
      {!gameOn && (
        <ActionBtn onClick={handleFinishBtnClick}>finish game</ActionBtn>
      )}
    </Wrapper>
  );
}
