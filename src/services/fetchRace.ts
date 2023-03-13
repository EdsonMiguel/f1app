import api from '../infra/api';
import { IRace } from '../DTO/IRace';


function wait5sec (waitTime) {

  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, waitTime);
  });
  
}

export async function fetchRaces() {
  await wait5sec(2000);
  const { data } = await api.get("2023.json", {
  });

  const racesList : IRace[] = data.MRData.RaceTable.Races
  return racesList;
}

