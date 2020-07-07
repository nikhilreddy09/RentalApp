using RentalApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace RentalApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){}
        
        

        public DbSet<User> Users{get;set;}

        public DbSet<Ad> Ads{get;set;}

        public DbSet<Photo> Photos{get;set;}
    }
}