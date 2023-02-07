using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace _1AspWebApp.Controllers.Models
{
    public class GradeCalcModel
    {
        //All fields are required and have min/max 0/100
        [Required]
        [Range(0, 100)]
        public Int32 assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public Int32 project { get; set; }
        [Required]
        [Range(0, 100)]
        public Int32 quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public Int32 midterm { get; set; }
        [Required]
        [Range(0, 100)]
        public Int32 final { get; set; }
        [Required]
        [Range(0, 100)]
        public Int32 iNTEX { get; set; }

    }
}
