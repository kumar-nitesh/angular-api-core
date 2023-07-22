using Microsoft.AspNetCore.Mvc;
using VSCodeApi.Data;
using VSCodeApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace VSCodeApi.Controllers;

[ApiController]
[Route("[controller]")]
public class MedicinesController : ControllerBase
{
    private DataContext _dataContext;  

    public MedicinesController(DataContext dataContext)
    {
        _dataContext = dataContext;
    }      

    [HttpGet(Name = "GetMedicines")]
    public async Task<ActionResult<List<Medicine>>> GetMedicines()
    {
        var medicines = await _dataContext.Medicines.ToListAsync();
        return medicines;
    }

    [HttpPost]
    public async Task<ActionResult<Medicine>> AddMedicine([FromServicesAttribute] DataContext _dataContext, [FromBody] Medicine medicine)
    {
        if(!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        _dataContext.Medicines.Add(medicine);
        await _dataContext.SaveChangesAsync();
        return medicine;
    }
}
