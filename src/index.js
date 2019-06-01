import 'bootstrap';
import './styles/main.scss';

$.getJSON('https://api.adcookie.usermd.net/deweloper/', function(data) {
        
  var text = `Date: ${data.date}<br>
              Time: ${data.time}<br>
              Unix time: ${data.milliseconds_since_epoch}`

  var slider_content = `Nazwa:
                        Metraz:
                        Netto: 
                        Pietro:
                        Przeznaczenie:
                        Status:
                        Ekspozycja:
                        Obrazki:

                      `
              
  $(".mypanel").html(text);
});

[{"nazwa":"Lokal U\/0\/1",
"metraz":129.69,
"netto":1426590,
"pietro":0,
"przeznaczenie":"Gastronomia",
"status":"Wolny",
"ekspozycja":"Po\u0142udniowy-Wsch\u00f3d",
"obrazki":{"rzut":"https:\/\/api.adcookie.usermd.net\/deweloper\/rzut\/U01.png","pietro":"https:\/\/api.adcookie.usermd.net\/deweloper\/pietro\/U01.jpg"}},

{"nazwa":"Lokal U\/0\/2","metraz":259.26999999999998,"netto":2851970,"pietro":0,"przeznaczenie":"Dowolne","status":"Zarezerwowany","ekspozycja":"P\u00f3\u0142noc","obrazki":{"rzut":"https:\/\/api.adcookie.usermd.net\/deweloper\/rzut\/U02.png","pietro":"https:\/\/api.adcookie.usermd.net\/deweloper\/pietro\/U02.jpg"}},{"nazwa":"Lokal U\/0\/3","metraz":88.569999999999993,"netto":974270,"pietro":0,"przeznaczenie":"Dowolne","status":"Wolny","ekspozycja":"P\u00f3\u0142noc","obrazki":{"rzut":"https:\/\/api.adcookie.usermd.net\/deweloper\/rzut\/U03.png","pietro":"https:\/\/api.adcookie.usermd.net\/deweloper\/pietro\/U03.jpg"}},{"nazwa":"Lokal U\/0\/4","metraz":22.920000000000002,"netto":275040,"pietro":0,"przeznaczenie":"Tekstylia","status":"Wolny","ekspozycja":"P\u00f3\u0142noc","obrazki":{"rzut":"https:\/\/api.adcookie.usermd.net\/deweloper\/rzut\/U04.png","pietro":"https:\/\/api.adcookie.usermd.net\/deweloper\/pietro\/U04.jpg"}},{"nazwa":"Lokal U\/0\/5","metraz":127.73,"netto":1405030,"pietro":0,"przeznaczenie":"Dowolne","status":"Sprzedany","ekspozycja":"Zach\u00f3d","obrazki":{"rzut":"https:\/\/api.adcookie.usermd.net\/deweloper\/rzut\/U05.png","pietro":"https:\/\/api.adcookie.usermd.net\/deweloper\/pietro\/U05.jpg"}}]