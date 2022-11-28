interface IStore {
  game: {
    username: string;
    score: number;
    gameOn: boolean;
  };
}

interface IWordsChunk {
  question: string;
  all_words: string[];
  good_words: string[];
}
