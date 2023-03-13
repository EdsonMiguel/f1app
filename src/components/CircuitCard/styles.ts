import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme}) => theme.COLORS.BLACK};
  margin-bottom: 7px;
  flex-direction: row;
  padding: 10px;
  border-radius: 5px;
`;

export const DateContainer = styled.View`
  border-style: dashed;
  border-right-color: ${({ theme }) => theme.COLORS.WHITE};
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  width: 30%;
`;

export const FromToDate = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  padding: 5px;
  font-size: 12px;
`;

export const MonthText = styled.Text`
  background-color: ${({ theme}) => theme.COLORS.DARK_GRAY};
  color: ${({ theme }) => theme.COLORS.GRAY};
  padding: 2px 6px;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 12px;
`;

export const AboutContainer = styled.View`
  justify-content: center;
  padding-left: 15px;
`

export const RoundTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  padding: 2px;
  font-size: 12px;
`;

export const CountryTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: 18px;
  padding-bottom:5px;
  
`;

export const AboutText = styled.Text`
   color: ${({ theme }) => theme.COLORS.GRAY};
   font-size: 12px;
`; 
