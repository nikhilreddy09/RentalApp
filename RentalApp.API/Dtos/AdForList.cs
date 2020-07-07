using System;

namespace RentalApp.API.Dtos
{
    public class AdForList
    {
         public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public string City { get; set; }
        public DateTime AvailableFrom { get; set; }
        public DateTime AvailableTill { get; set; }
        public string PhotoUrl { get; set; }
    }
}