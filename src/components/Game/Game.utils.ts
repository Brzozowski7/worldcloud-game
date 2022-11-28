export const getRandomWordsChunk = (wordsArr: IWordsChunk[]) => {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)];
};

export const checkAnswers = (
  userAnswersArr: string[],
  correctAnswersArr: string[]
) => {
  const userCorrectAnswers = userAnswersArr.filter((answer) =>
    correctAnswersArr.includes(answer)
  );
  const userWrongAnswers = userAnswersArr.filter(
    (answer) => !correctAnswersArr.includes(answer)
  );
  return { userCorrectAnswers, userWrongAnswers };
};

export const checkScore = (
  correctAnswers: number,
  wrongAnswers: number,
  allGoodAnswers: number
) => {
  const notSelectedCorrectAnswers = allGoodAnswers - correctAnswers;
  return correctAnswers * 2 - (wrongAnswers + notSelectedCorrectAnswers);
};

export const capitalizeFirstLetter = (string: string) =>
  string && string[0].toUpperCase() + string.slice(1);
