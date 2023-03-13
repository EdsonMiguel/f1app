import { Header } from '../../components/Header';
import * as S from './styles';
import { Image } from 'expo-image';
import { useRoute } from "@react-navigation/native"

interface Props {
  raceId: string;
}

export function RaceScreen(){
  const { params } = useRoute();
  const { raceId } = params as Props;
  
  return(
    <S.Container>
      <Header title='SAUDI ARABIA'/>
      <S.Title>{raceId}</S.Title>
      <Image 
        source="https://media.formula1.com/content/dam/fom-website/2018-redesign-assets/Track%20icons%204x3/Saudi%20Arabia.png.transform/2col/image.png"
        style={{
          width: "100%",
          height: 200,
        }}
        contentFit="contain"
      />

    </S.Container>
  )
}