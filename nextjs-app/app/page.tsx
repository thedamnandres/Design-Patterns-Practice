import { VehicleTable } from './components/VehicleTable';

async function getVehicles() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/vehicle`, { cache: 'no-store' });
  if (!res.ok) {
    return { vehicles: [], error: 'Error al obtener vehículos' };
  }
  return res.json();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { vehicles, error } = await getVehicles();
  const params = await searchParams;
  const errorMessage = params.error || error;

  return (
    <VehicleTable vehicles={vehicles || []} errorMessage={errorMessage} />
  );
}