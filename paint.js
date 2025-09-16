document.addEventListener("DOMContentLoaded", function(){
    const pt = document.querySelector("#painttools");
    const ptButtons = pt.querySelectorAll(".pt-unfocus , .pt-focus");
    const p = document.getElementById("paint");

    ptButtons.forEach(function(currentIndex){
        currentIndex.addEventListener("mousedown", function(){
            if (currentIndex.getAttribute("class") != "pt-mouse-down" && currentIndex.getAttribute("class") != "pt-focus"){
                currentIndex.className = "pt-mouse-down";
            }
        });
        currentIndex.addEventListener("mouseup", function(){
            if (currentIndex.getAttribute("class") != "pt-focus"){
                const ptf = pt.querySelector(".pt-focus");
                ptf.className = "pt-unfocus";
                currentIndex.className = "pt-focus";
            }
        });
    });
});