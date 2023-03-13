export interface ICircuit {
  circuitId: string;
  circuitName:  string;
  circuitMapImg: string;
  Location: {
    lat:  string;
    long:  string;
    locality:  string;
    country:  string;
  }
}