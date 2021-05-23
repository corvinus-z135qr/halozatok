using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.CrudeModels
{
    public partial class Instructor
    {
        public Instructor()
        {
            Lessons = new HashSet<Lesson>();
        }

        public int InstructorSk { get; set; }
        public string Salutation { get; set; }
        public string Name { get; set; }
        public byte? StatusFk { get; set; }
        public string EmployementFk { get; set; }

        public virtual Employement EmployementFkNavigation { get; set; }
        public virtual Status StatusFkNavigation { get; set; }
        public virtual ICollection<Lesson> Lessons { get; set; }
    }
}
