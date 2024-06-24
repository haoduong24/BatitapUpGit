using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Hao2406.Models;

namespace Hao2406.Controllers
{
    public class KetQuasController : Controller
    {
        private qlsinhvienEntities db = new qlsinhvienEntities();

        // GET: KetQuas
        public ActionResult DvhIndex()
        {
            var ketQua = db.KetQua.Include(k => k.MonHoc).Include(k => k.SinhVien);
            return View(ketQua.ToList());
        }

        // GET: KetQuas/Details/5
        public ActionResult DvhDetails(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            KetQua ketQua = db.KetQua.Find(id);
            if (ketQua == null)
            {
                return HttpNotFound();
            }
            return View(ketQua);
        }

        // GET: KetQuas/Create
        public ActionResult DvhCreate()
        {
            ViewBag.MaMH = new SelectList(db.MonHoc, "MaMH", "TenMH");
            ViewBag.MaSV = new SelectList(db.SinhVien, "MaSV", "HoSV");
            return View();
        }

        // POST: KetQuas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DvhCreate([Bind(Include = "MaSV,MaMH,Diem")] KetQua ketQua)
        {
            if (ModelState.IsValid)
            {
                db.KetQua.Add(ketQua);
                db.SaveChanges();
                return RedirectToAction("DvhIndex");
            }

            ViewBag.MaMH = new SelectList(db.MonHoc, "MaMH", "TenMH", ketQua.MaMH);
            ViewBag.MaSV = new SelectList(db.SinhVien, "MaSV", "HoSV", ketQua.MaSV);
            return View(ketQua);
        }

        // GET: KetQuas/Edit/5
        public ActionResult DvhEdit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            KetQua ketQua = db.KetQua.Find(id);
            if (ketQua == null)
            {
                return HttpNotFound();
            }
            ViewBag.MaMH = new SelectList(db.MonHoc, "MaMH", "TenMH", ketQua.MaMH);
            ViewBag.MaSV = new SelectList(db.SinhVien, "MaSV", "HoSV", ketQua.MaSV);
            return View(ketQua);
        }

        // POST: KetQuas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult DvhEdit([Bind(Include = "MaSV,MaMH,Diem")] KetQua ketQua)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ketQua).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("DvhIndex");
            }
            ViewBag.MaMH = new SelectList(db.MonHoc, "MaMH", "TenMH", ketQua.MaMH);
            ViewBag.MaSV = new SelectList(db.SinhVien, "MaSV", "HoSV", ketQua.MaSV);
            return View(ketQua);
        }

        // GET: KetQuas/Delete/5
        public ActionResult DvhDelete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            KetQua ketQua = db.KetQua.Find(id);
            if (ketQua == null)
            {
                return HttpNotFound();
            }
            return View(ketQua);
        }

        // POST: KetQuas/Delete/5
        [HttpPost, ActionName("DvhDelete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            KetQua ketQua = db.KetQua.Find(id);
            db.KetQua.Remove(ketQua);
            db.SaveChanges();
            return RedirectToAction("DvhIndex");
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
