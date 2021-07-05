using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);
        Task<bool> SaveAllAsync();

        // we wont be using this method 
        Task<IEnumerable<AppUser>> GetUsersAsync();

        // we wont be using this method 
        Task<AppUser> GetUserByIdAsync(int id);

        // we wont be using this method 
        Task<AppUser> GetUserByUsernameAsync(string username);

        // we wil be using this method which will already map the data according to member dto and return it 
        Task<IEnumerable<MemberDto>> GetMembersAsync();
        Task<MemberDto> GetMemberAsync(string username);
    }
}