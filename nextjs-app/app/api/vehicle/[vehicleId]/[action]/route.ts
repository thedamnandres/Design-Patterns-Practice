import { NextResponse } from 'next/server';
import { handleVehicleAction } from '../../helpers';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ vehicleId: string; action: string }> }
) {
  const { vehicleId, action } = await params;
  
  const actionMap: Record<string, (vehicle: any) => void> = {
    'start-engine': (vehicle) => vehicle.startEngine(),
    'stop-engine': (vehicle) => vehicle.stopEngine(),
    'add-gas': (vehicle) => vehicle.addGas(),
  };

  const vehicleAction = actionMap[action];
  if (!vehicleAction) {
    return NextResponse.redirect(new URL('/?error=Acción no válida', request.url));
  }

  return handleVehicleAction(vehicleId, vehicleAction, request);
}

