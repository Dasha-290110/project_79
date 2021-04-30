menu_list_array=["Chicken tandoori pizza","deluxe veggie pizza","paneer tikka pizza","veg extravaganza","veg supreme pizza"];
 
function getmenu(){
    var html;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort()
 for(var i=0; i <menu_list_array.length;i++){
     htmldata=htmldata + '(li)'+menu_list_array [i] +'</li>'
    }
 htmldata=html+"(ol)"
 document.getElementById("display_menu").innerHTML=htmldata;
}

