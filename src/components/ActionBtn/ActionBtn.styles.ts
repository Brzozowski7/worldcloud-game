import styled from "styled-components";
import { pallete } from "../../misc/pallete";

export const StyledBtn = styled.button`
  background-color: ${pallete.White};
  color: ${pallete.Blue};
  border: 1px solid ${pallete.Blue};
  border-radius: 4px;
  padding: 8px 20px;
  &:hover {
    cursor: pointer;
  }
`;
