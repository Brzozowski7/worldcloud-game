import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import {
  Wrapper,
  Word,
  CorrectAnswerIndicator,
  WrongAnswerIndicator,
} from "./GameWord.styles";
import { generateRandomWidth } from "./GameWord.utils";

interface GameWordProps {
  word: string;
  chosenWords: string[];
  setChosenWords: Dispatch<SetStateAction<string[]>>;
  isClicked: boolean;
  isCorrect: boolean;
  isWrong: boolean;
}

export default function GameWord({
  word,
  setChosenWords,
  chosenWords,
  isClicked,
  isCorrect,
  isWrong,
}: GameWordProps) {
  const { gameOn } = useSelector(({ game }: IStore) => game);
  const [width, setWidth] = useState<number>();

  const handleClick = () => {
    if (gameOn) {
      if (chosenWords.includes(word)) {
        setChosenWords((prev) => prev.filter((item) => item !== word));
      } else {
        setChosenWords((prev) => [...prev, word]);
      }
    }
  };
  useEffect(() => {
    setWidth(generateRandomWidth());
  }, []);

  return (
    <Wrapper width={width} gameOn={gameOn}>
      {isCorrect && <CorrectAnswerIndicator>Good</CorrectAnswerIndicator>}
      {isWrong && <WrongAnswerIndicator>Bad</WrongAnswerIndicator>}
      <Word
        isCorrect={isCorrect}
        isWrong={isWrong}
        isClicked={isClicked}
        onClick={handleClick}
      >
        {word}
      </Word>
    </Wrapper>
  );
}
