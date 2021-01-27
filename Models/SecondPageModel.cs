using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class SecondPageModel
    {
        [Range(0,100, ErrorMessage ="The Number must be between 0 and 100")]
        public double Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "The Number must be between 0 and 100")]
        public double Projects { get; set; }
        [Range(0, 100, ErrorMessage = "The Number must be between 0 and 100")]
        public double Quiz { get; set; }
        [Range(0, 100, ErrorMessage = "The Number must be between 0 and 100")]
        public double exam { get; set; }
        [Range(0, 100, ErrorMessage = "The Number must be between 0 and 100")]
        public double INTEX { get; set; }

    }
}
