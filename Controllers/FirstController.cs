using Assignment1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Controllers
{
    public class FirstController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("SecondPage")]
        public IActionResult SecondPage()
        {
            return View();
        }


        [HttpPost("SecondPage")]
        public IActionResult SecondPage(SecondPageModel model)
        {
            return View();
        }
    }
}
