import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLACK};
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const PositionText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  border-right-color: blue;
  border-right-width: 5px;
  padding-right: 10px;
  font-size: 18px;
`;

export const ConstructorName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  margin: auto;
  font-size: 18px;
`;

export const Points = styled.Text`
  background-color: ${({ theme}) => theme.COLORS.DARK_GRAY};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 2px 8px;
  border-radius: 18px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  text-align: center;
`;

