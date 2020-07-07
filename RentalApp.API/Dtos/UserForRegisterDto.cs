using System.ComponentModel.DataAnnotations;

namespace RentalApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username {get; set;}
        

        [Required]
        [StringLength(8,MinimumLength = 4, ErrorMessage = "you must specify password between 4 and 8 characters.")]
        public string Password{get;set;}

        public string Gender { get; set; }
        public string city { get; set; }
        public string Email { get; set; }
         public string NickName { get; set; }
         public string Introduction { get; set; }
    }
}