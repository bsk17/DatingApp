using System;
using System.Collections.Generic;

namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        // we are not keeping UserName but Username because we will be using Username in angular
        public string Username { get; set; }
        public string PhotoUrl { get; set; }
        // The Age property will be set because we have a method named GetAge in AppUser
        // whatever the value is returned from that method will be set to this property
        public int Age { get; set; }
        public string KnownAs { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastActive { get; set; }
        public string Gender { get; set; }
        public string Introduction { get; set; }
        public string LookingFor { get; set; }
        public string Interests { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
    }
}