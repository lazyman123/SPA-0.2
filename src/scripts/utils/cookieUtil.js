let cookieUtil = {
 setCookie:function (name,value,days){
     var date=new Date();
     date.setDate(date.getDate()+days);

     document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
 },
 setcookie(name,Productarr) {
   var str = JSON.stringify(Productarr);
   this.setCookie("cart",str,30);

},
 getCookie: function (name){
         var cookieValue;
         var strCookie=document.cookie;
         var arrCookie=strCookie.split("; ");
         for(var i=0;i<arrCookie.length;i++){
             var item=arrCookie[i].split("=");
             if(item[0]==name){
                 cookieValue=item[1];
             }
         }
         return decodeURIComponent(cookieValue);
 },
 removeCookie:function(name){
     this.setCookie(name,"",-1);
 }
}

export default cookieUtil;
