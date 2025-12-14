using Best_Practices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Best_Practices.Infraestructure.Singletons
{
    public class VehicleCollection
    {
        private static VehicleCollection _instance;

        public ICollection<Vehicle> Vehicles { get; set; }

        public static VehicleCollection Instance
        {
            get
            {
                if(_instance == null)
                {
                    _instance = new VehicleCollection();
                }
                return _instance;
            }
        }
        
        public VehicleCollection()
        {
            Vehicles = new List<Vehicle>();
        }
    }
}
