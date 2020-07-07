using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using RentalApp.API.Models;

namespace RentalApp.API.Data
{
    public interface IAdRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<Ad>> GetAds();
         Task<Ad> GetAd(int id);

         Task<Ad> AddReal(Ad ad);
    }
}