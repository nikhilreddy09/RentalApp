using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RentalApp.API.Models;

namespace RentalApp.API.Data
{
    public class AdRepository : IAdRepository
    {
        private readonly DataContext _context;
        public AdRepository(DataContext context)
        {
            _context = context;

        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public async Task<Ad> AddReal(Ad ad)
        {
            // throw new System.NotImplementedException();
            await _context.Ads.AddAsync(ad);
            await _context.SaveChangesAsync();
            return ad;
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public async Task<Ad> GetAd(int id)
        {
            var ad = await _context.Ads.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);
            return ad;
        }

        public async Task<IEnumerable<Ad>> GetAds()
        {
            var ads = await _context.Ads.Include(p => p.Photos).ToListAsync();
            return ads;
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}