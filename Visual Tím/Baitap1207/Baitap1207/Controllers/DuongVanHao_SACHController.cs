using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Baitap1207.Models;

namespace Baitap1207.Controllers
{
    public class DuongVanHao_SACHController : Controller
    {
        private DuongVanHao_2210900099Entities db = new DuongVanHao_2210900099Entities();

        // GET: DuongVanHao_SACH
        public ActionResult Index()
        {
            var duongVanHao_SACH = db.DuongVanHao_SACH.Include(d => d.DuongVanHao_TACGIA);
            return View(duongVanHao_SACH.ToList());
        }

        // GET: DuongVanHao_SACH/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DuongVanHao_SACH duongVanHao_SACH = db.DuongVanHao_SACH.Find(id);
            if (duongVanHao_SACH == null)
            {
                return HttpNotFound();
            }
            return View(duongVanHao_SACH);
        }

        // GET: DuongVanHao_SACH/Create
        public ActionResult Create()
        {
            ViewBag.DuongVanHao_MaTG = new SelectList(db.DuongVanHao_TACGIA, "DuongVanHao_MaTG", "DuongVanHao_TenTacGia");
            return View();
        }

        // POST: DuongVanHao_SACH/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DuongVanHao_MaSach,DuongVanHao_TenSach,DuongVanHao_SoTrang,DuongVanHao_NamXB,DuongVanHao_MaTG,DuongVanHao_TrangThai")] DuongVanHao_SACH duongVanHao_SACH)
        {
            if (ModelState.IsValid)
            {
                db.DuongVanHao_SACH.Add(duongVanHao_SACH);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.DuongVanHao_MaTG = new SelectList(db.DuongVanHao_TACGIA, "DuongVanHao_MaTG", "DuongVanHao_TenTacGia", duongVanHao_SACH.DuongVanHao_MaTG);
            return View(duongVanHao_SACH);
        }

        // GET: DuongVanHao_SACH/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DuongVanHao_SACH duongVanHao_SACH = db.DuongVanHao_SACH.Find(id);
            if (duongVanHao_SACH == null)
            {
                return HttpNotFound();
            }
            ViewBag.DuongVanHao_MaTG = new SelectList(db.DuongVanHao_TACGIA, "DuongVanHao_MaTG", "DuongVanHao_TenTacGia", duongVanHao_SACH.DuongVanHao_MaTG);
            return View(duongVanHao_SACH);
        }

        // POST: DuongVanHao_SACH/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "DuongVanHao_MaSach,DuongVanHao_TenSach,DuongVanHao_SoTrang,DuongVanHao_NamXB,DuongVanHao_MaTG,DuongVanHao_TrangThai")] DuongVanHao_SACH duongVanHao_SACH)
        {
            if (ModelState.IsValid)
            {
                db.Entry(duongVanHao_SACH).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.DuongVanHao_MaTG = new SelectList(db.DuongVanHao_TACGIA, "DuongVanHao_MaTG", "DuongVanHao_TenTacGia", duongVanHao_SACH.DuongVanHao_MaTG);
            return View(duongVanHao_SACH);
        }

        // GET: DuongVanHao_SACH/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DuongVanHao_SACH duongVanHao_SACH = db.DuongVanHao_SACH.Find(id);
            if (duongVanHao_SACH == null)
            {
                return HttpNotFound();
            }
            return View(duongVanHao_SACH);
        }

        // POST: DuongVanHao_SACH/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            DuongVanHao_SACH duongVanHao_SACH = db.DuongVanHao_SACH.Find(id);
            db.DuongVanHao_SACH.Remove(duongVanHao_SACH);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
