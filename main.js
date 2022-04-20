
const bdy=document.getElementById('body')
const sun=document.getElementById('sun')
const moon=document.getElementById('moon')
sun.onclick=function(){
    if(bdy.classList.contains('body')){
        bdy.classList='dark-mode';
        sun.style.display="none"
        moon.style.display="block"
    }
    else{
        bdy.classList='body';
    }
}
moon.onclick=function(){
    if(bdy.classList.contains('dark-mode')){
        bdy.classList='body';
        moon.style.display="none"
        sun.style.display="block"
    }
}
//WHEN CLICK BTN ABOUT ME 
document.querySelector(".btn2").addEventListener("click", () => {
    aboutBTN.style.zIndex="5"
    aboutBTN.style.opacity="1"
});
document.querySelector("#aboutBTN").addEventListener("click", () => {
    aboutBTN.style.zIndex=""
    aboutBTN.style.opacity=""
});
// WHEN CLICK BTNS IN OFFER PAGE
const product=document.getElementById('product')
document.querySelector("#p1").addEventListener("click", () => {
    product.style.zIndex="5"
    product.style.opacity="1"
});
document.querySelector("#close2").addEventListener("click", () => {
    product.style.zIndex=""
    product.style.opacity=""
});
document.querySelector("#p2").addEventListener("click", () => {
    visual.style.zIndex="5"
    visual.style.opacity="1"
});
document.querySelector("#close3").addEventListener("click", () => {
    visual.style.zIndex=""
    visual.style.opacity=""
});
document.querySelector("#p3").addEventListener("click", () => {
    ui.style.zIndex="5"
    ui.style.opacity="1"
});
document.querySelector("#close4").addEventListener("click", () => {
    ui.style.zIndex=""
    ui.style.opacity=""
});
document.querySelector("#btnWork").addEventListener("click", () => {
    moreWorks.style.zIndex="5"
    moreWorks.style.opacity="1"
});
document.querySelector("#close5").addEventListener("click", () => {
    moreWorks.style.zIndex=""
    moreWorks.style.opacity=""
});
// WHEN SCROLL WHAT HAPPEN
// 1 - HEADER
const header=document.getElementById('header')
const up=document.getElementById('up')

window.onscroll=function(){
    if(scrollY>=330){
        header.style.position="static"
        up.style.display="block"
    }
    else{
        header.style.position=""
        up.style.display=""
    }
}
// ========WHEN CLICK ICON BAR SHOW THE BAR =============================
const bar=document.getElementById("bar-icon")
const closeBar=document.getElementById("close-bar")
document.querySelector("#bar-icon").addEventListener("click", () => {
    document.querySelector(".bar").classList.toggle("bar-show");
    document.querySelector(".close-bar").classList.toggle("close-bar-show");
    bar.style.display="none"
});
document.querySelector("#close-bar").addEventListener("click", () => {
    document.querySelector(".bar").classList.toggle("bar-show");
    document.querySelector(".close-bar").classList.toggle("close-bar-show");
    bar.style.display=""
});
// ============================
// const weba=document.getElementById("webb")
// const all=document.getElementById("all")
// console.log(w);
// document.querySelector("#webb").addEventListener("click", () => {
//     document.querySelectorAll(".web").classList.toggle("web-hide");
//     all.removeAttribute("class")
//     weba.setAttribute("class","pall")
// });
let i=1;
const mo=document.getElementById('auto');
const autowrite=()=>{
    const title="Mohamed ShalaSh                                 "
    mo.innerText=title.slice(0,i);
    i++;
    if(title.length<i){
        i=1;
    }
};
const stop=setInterval(autowrite,500)
// mssg when hover music
const audio=document.getElementById('audio')
const audioP=document.getElementById('audioo')
audio.addEventListener("mouseover",()=>{
    audioP.style.display="block"
})
audio.addEventListener("mouseout",()=>{
    audioP.style.display=""
})
