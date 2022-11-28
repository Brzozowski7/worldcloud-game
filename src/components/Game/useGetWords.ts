import { useState, useEffect } from "react";
import axios from "axios";
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
      const response = await axios("data.json");
      setWords(getRandomWordsChunk(response.data));
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
