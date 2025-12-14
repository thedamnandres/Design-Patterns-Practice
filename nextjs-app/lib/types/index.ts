export interface IVehicle {
    id: string;
    brand: string;
    model: string;
    color: string;
    year: number;
    gas: number;
    fuelLimit: number;
    tires: number;
    isEngineOn: boolean;
    type: string;
    
    startEngine(): void;
    stopEngine(): void;
    addGas(): void;
    needsGas(): boolean;
    isEngineRunning(): boolean;
  }