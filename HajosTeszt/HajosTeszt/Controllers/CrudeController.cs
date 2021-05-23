using HajosTeszt.CrudeModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/Course")]
    [ApiController]
    public class CrudeController : ControllerBase
    {
        //Minden elem listázása
        // GET: api/<CrudeController>
        [HttpGet]
        public IEnumerable<Instructor> Get()
        {
            StudiesContext context = new StudiesContext();
            return context.Instructors.ToList();
        }

        // GET api/instructors/5
        [HttpGet("{id}")]
        public Instructor Get(int id)
        {
            StudiesContext context = new StudiesContext();
            var keresettOktató = (from x in context.Instructors
                                  where x.InstructorSk == id
                                  select x).FirstOrDefault();

        
            return keresettOktató;

        }
        //Új rekord felvétele
        // POST api/<CrudeController>
        [HttpPost]
        public void Post([FromBody] Instructor ÚjOktató)
        {
            StudiesContext context = new StudiesContext();
            context.Instructors.Add(ÚjOktató);
            context.SaveChanges();
        }

        // PUT api/<CrudeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        //Rekord törlése kulcs alapján
        // DELETE api/<CrudeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            StudiesContext context = new StudiesContext();
            var törlendőOktató = (from x in context.Instructors
                                  where x.InstructorSk == id
                                  select x).FirstOrDefault();
            context.Remove(törlendőOktató);
            context.SaveChanges();
        }
        // Összes kérdés száma
        [HttpGet]
        [Route("instructor/count")]
        public int M4() //Tetszőleges metódusnév
        {
            StudiesContext context = new StudiesContext();
            int kérdésekSzáma = context.Instructors.Count();

            return kérdésekSzáma;
        }
        //Kérdések azonosító alapú lekérdezése
        [HttpGet]
        [Route("instructors/all")]
        public ActionResult M1()
        {
            StudiesContext context = new StudiesContext();
            var kérdések = from x in context.Instructors select x.InstructorSk;

            return new JsonResult(kérdések);
        }
    }
}
