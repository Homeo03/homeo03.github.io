document.addEventListener("DOMContentLoaded", function(){
    const pt = document.querySelector("#painttools");
    const ptButtons = pt.querySelectorAll(".pt-unfocus , .pt-focus");
    const p = document.getElementById("paint");

    ptButtons.forEach(function(currentIndex){
        currentIndex.addEventListener("mousedown", function(){
            currentIndex.className = "pt-mouse-down";
        });
        currentIndex.addEventListener("mouseup", function(){
            const ptf = pt.querySelector(".pt-focus");
            ptf.className = "pt-unfocus";
            currentIndex.className = "pt-focus";
        });
    });
});