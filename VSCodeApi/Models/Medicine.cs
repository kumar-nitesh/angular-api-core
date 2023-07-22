using System.ComponentModel.DataAnnotations;

namespace VSCodeApi.Models;

public class Medicine
{
    [Key]
    public int Id {get;set;}

    [Required]
    [MaxLength(30)]
    [MinLength(3)]
    public string Name {get;set;}

    [Required]
    public string ExpiryDate  {get;set;} 
}