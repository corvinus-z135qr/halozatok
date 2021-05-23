using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.CrudeModels
{
    public partial class Time
    {
        public Time()
        {
            Lessons = new HashSet<Lesson>();
        }

        public byte TimeId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Lesson> Lessons { get; set; }
    }
}
