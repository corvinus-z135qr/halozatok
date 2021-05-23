using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.CrudeModels
{
    public partial class Employement
    {
        public Employement()
        {
            Instructors = new HashSet<Instructor>();
        }

        public string EmployementId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Instructor> Instructors { get; set; }
    }
}
