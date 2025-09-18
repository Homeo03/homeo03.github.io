document.addEventListener("DOMContentLoaded", function(){
    const tab1 = document.getElementById("tab0");
    const tab2 = document.getElementById("tab1");
    const start = document.getElementById("start");
    const p = document.getElementById("paint");
    const n = document.getElementById("notepad");

    start.addEventListener("mousedown", function(){mouseDown("s");});
    tab1.addEventListener("mousedown", function(){mouseDown("t0");});
    tab1.addEventListener("mouseup", function(){focusWindow("t0");});
    tab2.addEventListener("mousedown", function(){mouseDown("t1");});
    tab2.addEventListener("mouseup", function(){focusWindow("t1");});
    p.addEventListener("mousedown", function(){focusWindow("t0")});
    n.addEventListener("mousedown", function(){focusWindow("t1")});

    function focus(a){
        let focusTab;
        if (a == "t0") {
            focusTab = document.querySelector("#tab0");
        } else if (a == "t1"){
            focusTab = document.querySelector("#tab1");
        } else if (a == "s") {
            focusTab = document.querySelector("#start");
        }
        return focusTab;
    }

    function mouseDown(tab){
        const focusTab = focus(tab);
        focusTab.className = "mouse-down"
        document.querySelectorAll(".focused-header").className = "unfocused-header";
        if(tab == "s"){
            document.getElementById("tab0").className = "unfocus"
            document.getElementById("tab1").className = "unfocus"
        }
        console.log(focusTab);
    }

    function focusWindow(tab){
        const focusTab = focus(tab);
        const toUnfocus = document.querySelector(".focus");
        if (focusTab.className != "focus"){
            focusTab.className = "focus";
        }
        if (focusTab == document.querySelector("#tab0") && toUnfocus.getAttribute("id") == "tab1"){
            document.querySelector("#header-p").className = "focused-header";
            document.querySelector("#header-n").className = "unfocused-header";
            toUnfocus.className = "unfocus";
        } else if (focusTab == document.querySelector("#tab1") && toUnfocus.getAttribute("id") == "tab0"){
            document.querySelector("#header-p").className = "unfocused-header";
            document.querySelector("#header-n").className = "focused-header";
            toUnfocus.className = "unfocus";
        }
    }
});