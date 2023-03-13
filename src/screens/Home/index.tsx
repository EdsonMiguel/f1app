import { useState, useEffect } from 'react';
import { Container } from './styles';
import { IRace } from '../../DTO/IRace'
import { FlatList } from 'react-native';
import { fetchRaces } from '../../services/fetchRace';
import { Loading } from "../../components/Loading";
import { CircuitCard } from '../../components/CircuitCard';
import { Header } from '../../components/Header';
import { useNavigation } from '@react-navigation/native';


export function HomeScreen(){
  const [racesList, setRacesList] = useState<IRace[]>([])
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  
  async function fetchRacesList() {
    setIsLoading(true);
    const racesList = await fetchRaces();
    setRacesList(racesList);
    setIsLoading(false);
  }

  function handleRaceSelect(raceId: string){
    navigation.navigate("race", {raceId: "teste"})
  }

  useEffect(()=>{
    fetchRacesList()
  },[])

  return(
    <>
      <Header title='RACING' />
      <Container>
        {
          isLoading ? (
            <Loading />
          ) : (
            <FlatList 
              data={racesList}
              renderItem={({ item }) => (
                <CircuitCard 
                  circuitId={item.Circuit.circuitId}
                  firstDate={new Date(item.FirstPractice.date)}
                  raceDate={new Date(item.date)}
                  countryName={item.Circuit.Location.country}
                  round={item.round}
                  description={item.Circuit.circuitName}
                  onPress={() => handleRaceSelect(item.round)}
                />
              )}
              keyExtractor={( item) => item.round }
              showsVerticalScrollIndicator={false}
              style={{width: "100%"}}
            />
          ) 
        }
      </Container>
    </>
    
  )
}