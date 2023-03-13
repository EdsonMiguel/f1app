import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme}) => theme.COLORS.RED};
  justify-content: flex-end;
  height: 75px;
  justify-content: flex-end;
  padding-bottom: 15px;
  padding-left: 15px
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 20px;
`;