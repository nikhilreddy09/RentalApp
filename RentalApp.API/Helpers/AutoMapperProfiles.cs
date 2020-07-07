using System.Linq;
using AutoMapper;
using RentalApp.API.Dtos;
using RentalApp.API.Models;

namespace RentalApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Ad, AdForList>().ForMember(
                dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<Ad, AdForDetails>().ForMember(
                dest => dest.PhotoUrl,opt => opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url));
            CreateMap<Photo,PhotosForDetailsDto>();
        }
    }
}