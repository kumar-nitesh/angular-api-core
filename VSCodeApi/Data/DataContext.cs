using Microsoft.EntityFrameworkCore;
using VSCodeApi.Models;

namespace VSCodeApi.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        
    }   
      
    public DbSet<Medicine> Medicines {get;set;}
}