using bai2.Models;
using Microsoft.AspNetCore.Mvc;

namespace bai2.Controllers
{
    public class CongViecController : Controller
    {
        private static List<CongViec> danhSachCongViec = new List<CongViec>
        {
            new CongViec { MaCongViec = 1, TenCongViec = "Đi chợ", TrangThaiHoanThanh = true },
            new CongViec { MaCongViec = 2, TenCongViec = "Chơi thể thao", TrangThaiHoanThanh = false },
            new CongViec { MaCongViec = 3, TenCongViec = "Chơi game", TrangThaiHoanThanh = false },
            new CongViec { MaCongViec = 4, TenCongViec = "Học bài", TrangThaiHoanThanh = true }
        };

        public IActionResult Index()
        {
            return View(danhSachCongViec);
        }

        public IActionResult Details(int id)
        {
            var congViec = danhSachCongViec.FirstOrDefault(x => x.MaCongViec == id);

            if (congViec == null)
            {
                return NotFound();
            }

            return View(congViec);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(CongViec congViec)
        {
            if (ModelState.IsValid)
            {
                danhSachCongViec.Add(congViec);
                return RedirectToAction("Index");
            }

            return View(congViec);
        }

        public IActionResult Edit(int id)
        {
            var congViec = danhSachCongViec.FirstOrDefault(x => x.MaCongViec == id);

            if (congViec == null)
            {
                return NotFound();
            }

            return View(congViec);
        }

        [HttpPost]
        public IActionResult Edit(CongViec congViec)
        {
            if (ModelState.IsValid)
            {
                var congViecCu = danhSachCongViec.FirstOrDefault(x => x.MaCongViec == congViec.MaCongViec);

                if (congViecCu == null)
                {
                    return NotFound();
                }

                congViecCu.TenCongViec = congViec.TenCongViec;
                congViecCu.TrangThaiHoanThanh = congViec.TrangThaiHoanThanh;

                return RedirectToAction("Index");
            }

            return View(congViec);
        }

        public IActionResult Delete(int id)
        {
            var congViec = danhSachCongViec.FirstOrDefault(x => x.MaCongViec == id);

            if (congViec == null)
            {
                return NotFound();
            }

            return View(congViec);
        }

        [HttpPost]
        public IActionResult DeleteConfirmed(int id)
        {
            var congViec = danhSachCongViec.FirstOrDefault(x => x.MaCongViec == id);

            if (congViec == null)
            {
                return NotFound();
            }

            danhSachCongViec.Remove(congViec);

            return RedirectToAction("Index");
        }
    }
}
