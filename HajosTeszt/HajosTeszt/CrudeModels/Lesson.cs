using System;
using System.Collections.Generic;

#nullable disable

namespace HajosTeszt.CrudeModels
{
    public partial class Lesson
    {
        public int LessonSk { get; set; }
        public int? CourseFk { get; set; }
        public int? InstructorFk { get; set; }
        public byte? DayFk { get; set; }
        public byte? TimeFk { get; set; }
        public int? RoomFk { get; set; }

        public virtual Course CourseFkNavigation { get; set; }
        public virtual Day DayFkNavigation { get; set; }
        public virtual Instructor InstructorFkNavigation { get; set; }
        public virtual Room RoomFkNavigation { get; set; }
        public virtual Time TimeFkNavigation { get; set; }
    }
}
