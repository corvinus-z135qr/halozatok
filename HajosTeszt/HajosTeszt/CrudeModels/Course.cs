using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.CrudeModels
{
    public partial class Course
    {
        public Course()
        {
            Lessons = new HashSet<Lesson>();
        }

        public int CourseSk { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

        public virtual ICollection<Lesson> Lessons { get; set; }
    }
}
