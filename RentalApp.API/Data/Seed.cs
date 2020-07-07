using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;
using RentalApp.API.Models;

namespace RentalApp.API.Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context){
            if(!context.Ads.Any()){
                var adData = System.IO.File.ReadAllText("Data/UserSeedData.json");
                var ads = JsonConvert.DeserializeObject<List<Ad>>(adData);
                foreach(var ad in ads){
                    context.Ads.Add(ad);
                }
                context.SaveChanges();
            }
        }
    }
}