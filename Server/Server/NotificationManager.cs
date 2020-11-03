using CorePush.Google;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace Server
{
    public class NotificationManager
    {
        
        public static async Task SendNotification(string title, string body, string userToken)
        {
            try
            {
                using (var fcm = new FcmSender( GetFireBaseServerKey(), GetFireBaseSenderID()))
                {
                    await fcm.SendAsync(userToken , new
                    {
                        notification = new
                        {
                            title = title,
                            body = body,
                            //כל שאר הערכים רשות
                            vibrate="[300, 100, 400, 100, 400, 100, 400]",
                            icon ="https://upload.wikimedia.org/wikipedia/en/thumb/3/34/AlthepalHappyface.svg/256px-AlthepalHappyface.svg.png",
                            tag= "push demo",
                            data= new {url= "https://maps.google.com" }
                }
                    });
                }
            }
            catch (Exception e)
            {

            }
        }
        /// <summary>
        /// קריאת קוד השרת של
        ///  fcm 
        ///  מקובץ הקונפיגורציה
        /// </summary>
        /// <returns></returns>
        public static string GetFireBaseServerKey()
        {
            return ConfigurationManager.AppSettings["serverKeyFCM"];
        }

        public static string GetFireBaseSenderID()
        {
            return ConfigurationManager.AppSettings["SenderIdFCM"];
        }
        //התבנית של הנוטיפיקציה ב-json
        //{"notification":{"body":"This is a message.","title":"PUSH MESSAGE","vibrate":[300,100,400,100,400,100,400],"icon":"https://upload.wikimedia.org/wikipedia/en/thumb/3/34/AlthepalHappyface.svg/256px-AlthepalHappyface.svg.png","tag":"push demo","requireInteraction":true,"renotify":true,"data":{"url":"https://maps.google.com"}}}



    }
}