import { NextResponse } from 'next/server';
import { 
  FordMustangCreator, 
  FordExplorerCreator, 
  FordEscapeCreator, 
  vehicleRepository 
} from '@/lib/services/vehicle';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const model = searchParams.get('model');
  
  const creators: Record<string, any> = {
    'Mustang': FordMustangCreator,
    'Explorer': FordExplorerCreator,
    'Escape': FordEscapeCreator,
  };

  const CreatorClass = creators[model || ''];
  if (!CreatorClass) {
    return NextResponse.redirect(new URL('/?error=Modelo no válido', request.url));
  }

  const factory = new CreatorClass();
  const vehicle = factory.create();
  vehicleRepository.addVehicle(vehicle);
  
  return NextResponse.redirect(new URL('/', request.url));
}

