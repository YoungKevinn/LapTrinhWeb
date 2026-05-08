using Buoi3.Models;
using Microsoft.AspNetCore.Mvc;

namespace Buoi3.Controllers
{
    public class StudentController : Controller
    {
        private static List<StudentViewModel> danhSach = new List<StudentViewModel>();

        // GET: /Student/Index
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(StudentViewModel model)
        {
            danhSach.Add(model);
            return RedirectToAction("ShowKQ", model);
        }

        public IActionResult ShowKQ(StudentViewModel model)
        {
            int soLuong = danhSach.Count(s => s.ChuyenNganh == model.ChuyenNganh);
            ViewBag.SoLuong = soLuong;
            return View(model);
        }
    }
}