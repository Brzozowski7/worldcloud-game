import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../redux/slices/gameSlice";
import { Wrapper, Heading, UsernameInput } from "./WelcomeScreen.styles";
import ActionBtn from "../ActionButton/ActionBtn";

export default function WelcomeScreen() {
  const dispatch = useDispatch();
  const usernameInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (usernameInputRef.current) {
      dispatch(setUsername(usernameInputRef.current.value));
    }
  };

  return (
    <Wrapper>
      <Heading> Worldcloud game</Heading>
      <UsernameInput
        ref={usernameInputRef}
        type="text"
        placeholder="Enter your nickname here..."
      />
      <ActionBtn onClick={handleClick}>play</ActionBtn>
    </Wrapper>
  );
}
