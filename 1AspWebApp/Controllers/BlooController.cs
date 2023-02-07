using _1AspWebApp.Controllers.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _1AspWebApp.controllers
{
    public class BlooController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //Get to display webpage
        [HttpGet]
        public IActionResult GradeCalc()
        {
            return View();
        }

        //Post to send the model information
        [HttpPost]
        public IActionResult GradeCalc(GradeCalcModel model)
        {
            return View();
        }
    }
}
