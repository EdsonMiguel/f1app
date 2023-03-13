import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.DARK_GRAY};
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

