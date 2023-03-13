import { ICircuit } from "./ICircuit";

type DateTime = {
  date: string;
  time: string;
}

export interface IRace {
  season: string;
  round:  string;
  raceName:  string;
  date:  string;
  time:  string;
  Circuit: ICircuit;
  FirstPractice: DateTime;
  SecondPractice: DateTime;
  ThirdPractice: DateTime;
  Qualifying: DateTime;
}

