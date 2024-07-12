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
    public class DuongVanHao_TACGIAController : Controller
    {
        private DuongVanHao_2210900099Entities db = new DuongVanHao_2210900099Entities();

        // GET: DuongVanHao_TACGIA
        public ActionResult Index()
        {
            return View(db.DuongVanHao_TACGIA.ToList());
        }

        // GET: DuongVanHao_TACGIA/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DuongVanHao_TACGIA duongVanHao_TACGIA = db.DuongVanHao_TACGIA.Find(id);
            if (duongVanHao_TACGIA == null)
            {
                return HttpNotFound();
            }
            return View(duongVanHao_TACGIA);
        }

        // GET: DuongVanHao_TACGIA/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DuongVanHao_TACGIA/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "DuongVanHao_MaTG,DuongVanHao_TenTacGia")] DuongVanHao_TACGIA duongVanHao_TACGIA)
        {
            if (ModelState.IsValid)
            {
                db.DuongVanHao_TACGIA.Add(duongVanHao_TACGIA);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(duongVanHao_TACGIA);
        }

        // GET: DuongVanHao_TACGIA/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DuongVanHao_TACGIA duongVanHao_TACGIA = db.DuongVanHao_TACGIA.Find(id);
            if (duongVanHao_TACGIA == null)
            {
                return HttpNotFound();
            }
            return View(duongVanHao_TACGIA);
        }

        // POST: DuongVanHao_TACGIA/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "DuongVanHao_MaTG,DuongVanHao_TenTacGia")] DuongVanHao_TACGIA duongVanHao_TACGIA)
        {
            if (ModelState.IsValid)
            {
                db.Entry(duongVanHao_TACGIA).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(duongVanHao_TACGIA);
        }

        // GET: DuongVanHao_TACGIA/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DuongVanHao_TACGIA duongVanHao_TACGIA = db.DuongVanHao_TACGIA.Find(id);
            if (duongVanHao_TACGIA == null)
            {
                return HttpNotFound();
            }
            return View(duongVanHao_TACGIA);
        }

        // POST: DuongVanHao_TACGIA/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            DuongVanHao_TACGIA duongVanHao_TACGIA = db.DuongVanHao_TACGIA.Find(id);
            db.DuongVanHao_TACGIA.Remove(duongVanHao_TACGIA);
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
