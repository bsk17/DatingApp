using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    // AUTOMAPPERS are basically used to map one object to another 
    // since we are modifying our appuser with memberdto
    // therefore automapper will help us to map each other
    public class AutoMapperProfiles : Profile
    {
        // to use this service we have added the below line in  applicationservice extensions
        // services.AddAutoMapper(typeof(AutoMapperProfiles).Assembly);
        public AutoMapperProfiles()
        {
            // PhotoUrl was a property was not already present in AppUser
            // therefore we need to set the property from the ForMember()
            // we target the property as dest   
            // get the source by retreiving the the Url propperty of the first photo which has IsMain set to true
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl,
                                        opt => opt.MapFrom(src => src.Photos
                                                                            .FirstOrDefault(x => x.IsMain).Url))
                .ForMember(dest => dest.Age,
                                        opt => opt.MapFrom(src => src.DateOfBirth.CalculateAge()));
            CreateMap<Photo, PhotoDto>();
            CreateMap<MemberUpdateDto, AppUser>();
            CreateMap<RegisterDto, AppUser>();
        }
    }
}