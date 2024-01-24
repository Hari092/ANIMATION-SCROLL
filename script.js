const boxes=document.querySelectorAll(".box");

window.addEventListener("scroll",ani);
ani()
function ani(){
    const triggerBottom=(window.innerHeight/5 * 4);
    boxes.forEach((el)=>{
        const boxTop=el.getBoundingClientRect().top;

        if(boxTop<triggerBottom){
            el.classList.add("show");
        }else{
            el.classList.remove("show");
        }
    })
}