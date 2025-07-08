
var full_bg_img = document.querySelector(".full_bg_img");


var url_path = window.location.href;
var clicked_pdf_val = Array.from(url_path);


document.querySelectorAll('.click ul li img').forEach((e)=>{
    e.addEventListener("click", function(){
       var img_url = "url(" + this.src + ")";
       full_bg_img.style.backgroundImage = img_url;
    });
});


for(let i = 0; i < clicked_pdf_val.length; i++){
    if(clicked_pdf_val[i] == "="){
        clicked_pdf_val = url_path.split('=').pop();

        full_bg_img.style.backgroundImage = "url(../Images/Design/"+ clicked_pdf_val + ".jpg)" ;

    }
}