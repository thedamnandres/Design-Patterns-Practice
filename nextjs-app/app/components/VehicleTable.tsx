'use client';

import { IVehicle } from '@/lib/types';

interface VehicleTableProps {
  vehicles: IVehicle[];
  errorMessage?: string | null;
}

export function VehicleTable({ vehicles, errorMessage }: VehicleTableProps) {

  return (
    <div className="text-center">
      <h1 className="display-4">Welcome</h1>
      {errorMessage && (
        <div style={{ 
          padding: '0.75rem 1rem', 
          marginBottom: '1rem', 
          color: '#721c24', 
          backgroundColor: '#f8d7da', 
          border: '1px solid #f5c6cb', 
          borderRadius: '0.25rem' 
        }}>
          {errorMessage}
        </div>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipo</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Color</th>
            <th>Año</th>
            <th>Gallons</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.type}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.color}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.gas.toFixed(1)}</td>
              <td>{vehicle.isEngineOn ? 'Encendido' : 'Apagado'}</td>
              <td>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {vehicle.isEngineOn ? (
                    <a href={`/api/vehicle/${vehicle.id}/stop-engine`} className="btn btn-danger">Stop Engine</a>
                  ) : (
                    <a href={`/api/vehicle/${vehicle.id}/start-engine`} className="btn btn-success">Start Engine</a>
                  )}
                  <a href={`/api/vehicle/${vehicle.id}/add-gas`} className="btn btn-info">Llenar tanque</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="btn-group">
        <a href="/api/vehicle/add?model=Mustang" className="btn btn-primary">Add Mustang</a>
        <a href="/api/vehicle/add?model=Explorer" className="btn btn-primary">Add Explorer</a>
        <a href="/api/vehicle/add?model=Escape" className="btn btn-primary">Add Escape</a>
      </div>
    </div>
  );
}