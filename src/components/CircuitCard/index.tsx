import  * as S from './styles';
import { TouchableOpacityProps } from 'react-native';
interface Props extends TouchableOpacityProps{
  round: string;
  countryName: string;
  circuitId: string;
  description: string;
  firstDate: Date;
  raceDate: Date;
}

export function CircuitCard({ countryName, firstDate, raceDate, round, circuitId, description, ...rest} : Props){

  function formatDate(firstDate: Date, lastDate: Date) : string {
    let dayOne = firstDate.getDate() > 10 ? firstDate.getDate() : `0${firstDate.getDate()}` 
    let dayTwo = lastDate.getDate() > 10 ? lastDate.getDate() : `0${lastDate.getDate()}` 
    return `${dayOne} - ${dayTwo}`
  }

  function formatMonth(firstDate: Date, lastDate: Date) : string{
    const months = ["JAN", "FEV", "MAR", "MAI", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    let month = firstDate.getMonth() 
    if (month != lastDate.getMonth()){
      return `${months[month]}. - ${months[lastDate.getMonth()]}.`
    }
    return `${months[month]}.`
  }

  return(
    <S.Container {...rest}>
      <S.DateContainer>
        <S.FromToDate>{formatDate(firstDate, raceDate)}</S.FromToDate>
        <S.MonthText>{formatMonth(firstDate, raceDate)}</S.MonthText>
      </S.DateContainer>
      <S.AboutContainer>
        <S.RoundTitle>ROUND {round}</S.RoundTitle>
        <S.CountryTitle>{countryName}</S.CountryTitle>
        <S.AboutText>{description}</S.AboutText>
      </S.AboutContainer>
    </S.Container>
  )
}

