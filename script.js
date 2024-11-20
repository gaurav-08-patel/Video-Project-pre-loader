let video= document.querySelector("video");
let btnSlider = document.querySelector(".btn-slider");
let preLoader= document.querySelector(".preloader-container");

btnSlider.addEventListener("click",()=>{
    if(!btnSlider.classList.contains("go-left")){
        btnSlider.classList.add("go-left");
        video.pause();
    }
    else{
        btnSlider.classList.remove("go-left");
        video.play();
    }
    
});

window.addEventListener("load",()=>{
    preLoader.style.display="none";

})