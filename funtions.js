document.addEventListener("DOMContentLoaded", function(event) { 
var newAjax;
    document.getElementById("but").addEventListener("click", function (d){
   var ajax =  new XMLHttpRequest();
    ajax.open("GET","https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1" + Math.random(),true);
        ajax.send();
    ajax.onreadystatechange = function() {
       if( this.readyState === 4 && this.status == 200 ){ 
           newAjax = JSON.parse(this.responseText);
           
           document.getElementById("title").innerHTML = newAjax[0].title; 
        document.getElementById("text").innerHTML = newAjax[0].content;}
                    }; 
         });  
document.getElementById("twitter").addEventListener("click", function(d){
    var toTwit = 'http://twitter.com/home?status='+ encodeURIComponent(newAjax[0].content);
   document.getElementById("lin").href = toTwit;
    document.getElementById("lin").target = "_blank";
    
console.log(toTwit);
});
                                             
     });