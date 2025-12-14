import { NextResponse } from 'next/server';
import { vehicleRepository } from '@/lib/services/vehicle';

export async function GET(request: Request) {
  try {
    const vehicles = vehicleRepository.getVehicles();
    const { searchParams } = new URL(request.url);
    const error = searchParams.get('error');
    
    return NextResponse.json({ vehicles, error });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}