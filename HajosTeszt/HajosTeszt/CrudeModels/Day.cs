using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.CrudeModels
{
    public partial class Day
    {
        public Day()
        {
            Lessons = new HashSet<Lesson>();
        }

        public byte DayId { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Lesson> Lessons { get; set; }
    }
}
