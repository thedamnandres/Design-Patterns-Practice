import { IVehicle } from '@/lib/types';
import { vehicleDatabase } from '@/lib/database/memory';

// Template Method Pattern
export class Vehicle implements IVehicle {
  public id: string;
  public brand: string;
  public model: string;
  public color: string;
  public year: number = 0;
  public gas: number;
  public fuelLimit: number;
  public tires: number = 0;
  public isEngineOn: boolean;
  public type: string;

  constructor(color: string, brand: string, model: string, fuelLimit: number = 10) {
    this.id = crypto.randomUUID();
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.fuelLimit = fuelLimit;
    this.gas = 0;
    this.isEngineOn = false;
    this.type = this.constructor.name;
    this.applyDefaultProperties();
  }

  protected applyDefaultProperties(): void {
    this.year = this.getYear();
  }

  protected getYear(): number {
    return new Date().getFullYear();
  }

  startEngine(): void {
    if (this.isEngineOn) {
      throw new Error('Engine is already on');
    }
    if (this.needsGas()) {
      throw new Error('No enoguht gas. You need to go to Gas Station');
    }
    this.isEngineOn = true;
  }

  stopEngine(): void {
    if (!this.isEngineOn) {
      throw new Error('Enigne already stopped');
    }
    this.isEngineOn = false;
  }

  addGas(): void {
    if (this.gas >= this.fuelLimit) {
      throw new Error('Gas Full');
    }
    this.gas += 0.1;
  }

  needsGas(): boolean {
    return this.gas <= 0;
  }

  isEngineRunning(): boolean {
    return this.isEngineOn;
  }
}

export class Car extends Vehicle {
  constructor(color: string, brand: string, model: string) {
    super(color, brand, model);
    this.tires = 4;
  }
}

// Factory Method Pattern
export abstract class Creator {
  abstract create(): IVehicle;
}

export class FordMustangCreator extends Creator {
  create(): IVehicle {
    return new Car('Red', 'Ford', 'Mustang');
  }
}

export class FordExplorerCreator extends Creator {
  create(): IVehicle {
    return new Car('Black', 'Ford', 'Explorer');
  }
}

export class FordEscapeCreator extends Creator {
  create(): IVehicle {
    return new Car('Red', 'Ford', 'Escape');
  }
}

// Repository Pattern
export interface IVehicleRepository {
  getVehicles(): IVehicle[];
  addVehicle(vehicle: IVehicle): void;
  find(id: string): IVehicle | undefined;
}

export class MemoryVehicleRepository implements IVehicleRepository {
  getVehicles(): IVehicle[] {
    return vehicleDatabase.getVehicles();
  }

  addVehicle(vehicle: IVehicle): void {
    vehicleDatabase.addVehicle(vehicle);
  }

  find(id: string): IVehicle | undefined {
    return vehicleDatabase.findVehicle(id);
  }
}

export const vehicleRepository = new MemoryVehicleRepository();
