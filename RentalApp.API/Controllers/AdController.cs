using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RentalApp.API.Data;
using RentalApp.API.Dtos;
using RentalApp.API.Models;

namespace RentalApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class AdController : ControllerBase
    {
        private readonly IAdRepository _repo;
        private readonly IMapper _mapper;
        public AdController(IAdRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;

        }
        [HttpGet]
        public async Task<IActionResult> GetAds()
        {
            var Ads = await _repo.GetAds();
            var adsToReturn = _mapper.Map<IEnumerable<AdForList>>(Ads);
            return Ok(adsToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAd(int id)
        {
            var ad = await _repo.GetAd(id);
            var adToReturn = _mapper.Map<AdForDetails>(ad);
            return Ok(adToReturn);
        }


    }
}