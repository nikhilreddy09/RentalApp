using System;
using System.Collections.Generic;
using RentalApp.API.Models;

namespace RentalApp.API.Dtos
{
    public class AdForCreate
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string City { get; set; }
        public string Facilities { get; set; }
        public DateTime AvailableFrom { get; set; }
        public DateTime AvailableTill { get; set; }
        public ICollection<Photo> Photos { get; set; }

    }
}