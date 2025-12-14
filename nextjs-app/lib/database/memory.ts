import { IVehicle } from '@/lib/types';

class VehicleMemoryDatabase {
  private static _instance: VehicleMemoryDatabase | null = null;
  private vehicles: IVehicle[] = [];

  private constructor() {}

  static getInstance(): VehicleMemoryDatabase {
    if (!VehicleMemoryDatabase._instance) {
      VehicleMemoryDatabase._instance = new VehicleMemoryDatabase();
    }
    return VehicleMemoryDatabase._instance;
  }

  getVehicles(): IVehicle[] {
    return this.vehicles;
  }

  addVehicle(vehicle: IVehicle): void {
    this.vehicles.push(vehicle);
  }

  findVehicle(id: string): IVehicle | undefined {
    return this.vehicles.find(v => v.id === id);
  }

  updateVehicle(vehicle: IVehicle): void {
    const index = this.vehicles.findIndex(v => v.id === vehicle.id);
    if (index !== -1) {
      this.vehicles[index] = vehicle;
    }
  }
}

export const vehicleDatabase = VehicleMemoryDatabase.getInstance();