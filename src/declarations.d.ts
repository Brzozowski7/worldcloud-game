interface IStore {
  game: IGame;
}

interface IGame {
  username: string;
  score: number | undefined;
  gameOn: boolean;
}

interface IWordsChunk {
  question: string;
  all_words: string[];
  good_words: string[];
}
