using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using dvhK22CNT1Lesson11.ModelViews;

namespace dvhK22CNT1Lesson11.Controllers
{
    public class dvh0107sController : Controller
    {
        private dvh0107Entities1 db = new dvh0107Entities1();

        // GET: dvh0107s
        public ActionResult Index()
        {
            return View(db.dvh0107.ToList());
        }

        // GET: dvh0107s/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dvh0107 dvh0107 = db.dvh0107.Find(id);
            if (dvh0107 == null)
            {
                return HttpNotFound();
            }
            return View(dvh0107);
        }

        // GET: dvh0107s/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: dvh0107s/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "dvhId,dvhUserName,dvhPassword,dvhFullName,dvhAge,dvhEmail,dvhPhone,dvhStatus")] dvh0107 dvh0107)
        {
            if (ModelState.IsValid)
            {
                db.dvh0107.Add(dvh0107);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(dvh0107);
        }

        // GET: dvh0107s/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dvh0107 dvh0107 = db.dvh0107.Find(id);
            if (dvh0107 == null)
            {
                return HttpNotFound();
            }
            return View(dvh0107);
        }

        // POST: dvh0107s/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "dvhId,dvhUserName,dvhPassword,dvhFullName,dvhAge,dvhEmail,dvhPhone,dvhStatus")] dvh0107 dvh0107)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dvh0107).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(dvh0107);
        }

        // GET: dvh0107s/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            dvh0107 dvh0107 = db.dvh0107.Find(id);
            if (dvh0107 == null)
            {
                return HttpNotFound();
            }
            return View(dvh0107);
        }

        // POST: dvh0107s/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            dvh0107 dvh0107 = db.dvh0107.Find(id);
            db.dvh0107.Remove(dvh0107);
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

        // Form đăng nhập hệ thống
        public ActionResult dvhLogin()
        {
            var dvhModel = new dvhLoginModel();
            return View(dvhModel);
        }

        [HttpPost]
        public ActionResult dvhLogin(dvhLoginModel dvhModel)
        {
            // khi người dùng nhấn nút đăng nhập; xử lý và tìm kiến, so sanh trong db

            var dvhCheckLogin = db.dvh0107.Where(x => x.dvhUserName.Equals(dvhModel.dvhUserName) && x.dvhPassword.Equals(dvhModel.dvhPassword)).FirstOrDefault();
            if(dvhCheckLogin != null)
            {
                //Lưu trữ session
                Session["dvhMember"] = dvhCheckLogin;

                return Redirect("/");
            }
            return View(dvhModel);
        }
        public ActionResult Logout()
        {
            Session.Remove("dvhMember");
            return Redirect("/");
        }
    }
}
