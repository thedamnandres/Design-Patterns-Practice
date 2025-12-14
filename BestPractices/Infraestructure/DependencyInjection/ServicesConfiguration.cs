using Best_Practices.Controllers;
using Best_Practices.Repositories;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Best_Practices.Infraestructure.DependencyInjection
{
    public class ServicesConfiguration{

        private readonly IConfiguration _configuration;

        public ServicesConfiguration(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            // Se obtiene el tipo de repositorio y su configuracion
            var repositoryType = _configuration["RepositorySettings:RepositoryType"] ?? "Memory";
            var useDatabase = _configuration.GetValue<bool>("RepositorySettings:UseDatabase");

            // Si se usa la base de datos o el repositorio es Database, se usa el repositorio de base de datos
            if(useDatabase || repositoryType.Equals("Database", StringComparison.OrdinalIgnoreCase))
            {
                services.AddTransient<IVehicleRepository, DBVehicleRepository>(); //DB
            }
            else
            {
                services.AddTransient<IVehicleRepository, MyVehiclesRepository>(); //Memory
            }
        }
    }    
}