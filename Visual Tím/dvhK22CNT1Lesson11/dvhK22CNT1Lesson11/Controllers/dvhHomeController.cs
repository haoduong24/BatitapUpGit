using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using dvhK22CNT1Lesson11.ModelViews;

namespace dvhK22CNT1Lesson11.Controllers
{
    public class dvhHomeController : Controller
    {
        public ActionResult dvhIndex()
        {
            // lấy thông tin từ session
            //ViewBag["dvh0107"] = "";
            if (Session["dvhMember"] != null)
            {
                ViewBag.dvh0107 = ((dvh0107)Session["dvhMember"]).dvhFullName;
            }
            return View();
        }

        public ActionResult dvhAbout()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult dvhContact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}