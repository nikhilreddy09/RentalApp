using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RentalApp.API.Models
{      public class User
    {
          public int Id {get;set;}   
          public string Username {get;set;}
          public byte[] PasswordHash {get;set;}
          public byte[] PasswordSalt {get;set;}
          public string Gender { get; set; }
          // public DateTime DateOfBirth { get; set; }
          public string NickName { get; set; }
          // public DateTime Created { get; set; }
          // public DateTime LastActive { get; set; }
          public string Introduction { get; set; }
          public string city { get; set; }
          public string Email { get; set; }
    }
}