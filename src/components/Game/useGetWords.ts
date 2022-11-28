import { useState, useEffect } from "react";
import { getRandomWordsChunk } from "./Game.utils";

const useGetWords = () => {
  const [words, setWords] = useState<IWordsChunk>({
    question: "",
    all_words: [],
    good_words: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWords = async () => {
    setLoading(true);
    try {
      const response = await fetch("data.json");
      const data = await response.json();
      setWords(getRandomWordsChunk(data));
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWords();
  }, []);

  return { words, loading, error };
};

export default useGetWords;
