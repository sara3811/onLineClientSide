using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Server.Controllers
{
    public class HomeController : ApiController
    {
        [HttpGet]

        public async Task<IHttpActionResult> Push()
        {
            //יש להתקין את חבילת ה-nuget 
            //core-push
            //גירסה 2.01


            //הטוקן יגיע מהמסד נתונים והשליחה בפועל תתבצע בשכבת הלוגיקה
             await NotificationManager.SendNotification("איך הולך","מקווה שהכל כשורה", "fY_NPW4ar8MKbT3zHBojoe:APA91bFeuXBj01Ahq9kBkbNIsXrAv75durPDiA-BYsNXrKA8OGKN1-kvef5ecC_eh1icf61EDiDwSMPVP0Gx5kOd8YE11vcJIBYx7m02InNh1-vQRM-j0YT4qnIe0t-kd826dl9QsMgq");
            return Ok();
        }
    }
}
