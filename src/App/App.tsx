import { useSelector } from "react-redux";
import { GlobalStyle, Wrapper } from "./App.styles";
import WelcomeScreen from "../components/WelcomeScreen";
import Game from "../components/Game";
import ResultScreen from "../components/ResultScreen";

function App() {
  const { username, score } = useSelector(({ game }: IStore) => game);
  return (
    <Wrapper>
      <GlobalStyle />
      {!username && <WelcomeScreen />}
      {username && !score && <Game />}
      {score && <ResultScreen />}
    </Wrapper>
  );
}

export default App;
