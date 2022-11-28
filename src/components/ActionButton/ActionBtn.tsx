import { StyledBtn } from "./ActionBtn.styles";

interface ActionBtnProps {
  children: string;
  onClick: () => void;
}

export default function ActionBtn({ children, onClick }: ActionBtnProps) {
  return <StyledBtn onClick={() => onClick()}>{children}</StyledBtn>;
}
