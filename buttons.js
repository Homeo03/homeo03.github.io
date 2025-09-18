document.addEventListener("DOMContentLoaded", function(){
    let focusTab;
    let focusHeader;

    const startButton = document.getElementById("start");
    const startMenu = document.getElementById("startmenu");
    const headers = document.querySelectorAll(`[id^="header"]`);
    const tabs = document.querySelectorAll(`[id^="tab"]`);

    tabs.forEach(function(currentValue){
        /**iterates through tabs and adds eventListeners to each*/
        currentValue.addEventListener
        ("mousedown", function(){tabClick(currentValue);}, {once: true});
    });

    startButton.addEventListener("mousedown", startClick);
    
    function startClick(){
        /**handler for start button behavior*/
        startButton.setAttribute("class", "mouse-down");
        unfocusTabs("all");
        startMenu.style.display = "flex";
        //document.addEventListener("click", startMenuClose, {once:true});
    }

    function startMenuClose(){
        startMenu.style.display = "none";
    }

    function tabClick(a){
        /**handler for tab behavior (a = currentValue)*/
        let leave = false;
        a.setAttribute("class", "mouse-down");
        a.addEventListener
            ("mouseleave", function(){leaveCheck(a, leave);}, {once: true});
        a.addEventListener
            ("mouseup", function(){tabClickUp(a, leave);}, {once: true});    
        unfocusTabs(a);
    }

    function leaveCheck(a, b){
        /**mouseleave event handler (a = focusTab, b = leave)*/
        if(a.getAttribute("class") == "mouse-down"){
            unfocusTabs("all");
            return b = true;
        } else {
            return;
        }
    }

    function tabClickUp(a, b){
        /**mouseup event handler (a = focusTab, b = leave)*/
        if (b == false){
            a.setAttribute("class", "focus");
        }
    }

    function unfocusTabs(a){
        /**iterates through tabs and unfocuses if != currentValue*/
        tabs.forEach(function(currentValue, currentIndex){
            if (currentValue != a){
                headers[currentIndex].setAttribute("class", "unfocusH");
                currentValue.className = ("unfocus");
                currentValue.addEventListener
                ("mousedown", function(){tabClick(currentValue);}, {once: true});
            } else if (currentValue == a){
                currentValue.addEventListener("mouseup", function(){
                    headers[currentIndex].setAttribute("class", "focusH");
                }, {once: true});
            }
        });
    }

    function focusTabs(a){
        focusTab = document.getElementById(`tab${a}`);
        focusHeader = document.getElementById(`header${a}`);
        focusTab.setAttribute("class", "focus");
        focusHeader.setAttribute("class", "focus-header");
    }  
});