import { NextResponse } from 'next/server';
import { vehicleRepository } from '@/lib/services/vehicle';
import { vehicleDatabase } from '@/lib/database/memory';

export async function handleVehicleAction(
  vehicleId: string,
  action: (vehicle: any) => void,
  request: Request
): Promise<NextResponse> {
  try {
    const vehicle = vehicleRepository.find(vehicleId);
    if (!vehicle) {
      return NextResponse.redirect(new URL('/?error=Vehículo no encontrado', request.url));
    }
    action(vehicle);
    vehicleDatabase.updateVehicle(vehicle);
    return NextResponse.redirect(new URL('/', request.url));
  } catch (ex: any) {
    return NextResponse.redirect(new URL(`/?error=${encodeURIComponent(ex.message)}`, request.url));
  }
}

