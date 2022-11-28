import { StyledBtn } from "./ActionBtn.styles";

interface ActionBtnProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function ActionBtn({ children, onClick }: ActionBtnProps) {
  return (
    <StyledBtn data-testid="actionBtn" onClick={onClick}>
      {children}
    </StyledBtn>
  );
}
