document.addEventListener("DOMContentLoaded", function(){
    const tab1 = document.getElementById("tab1");
    const tab2 = document.getElementById("tab2");
    const p = document.getElementById("paint");
    const n = document.getElementById("notepad");

    tab1.addEventListener("mousedown", function(){mouseDown("t1");});
    tab1.addEventListener("mouseup", function(){focusWindow("t1");});
    tab2.addEventListener("mousedown", function(){mouseDown("t2");});
    tab2.addEventListener("mouseup", function(){focusWindow("t2");});
    p.addEventListener("click", function(){focusWindow("t1")});
    n.addEventListener("click", function(){focusWindow("t2")});

    function focus(a){
        let focusTab;
        if (a == "t1") {
            focusTab = document.querySelector("#tab1");
        } else if (a == "t2"){
            focusTab = document.querySelector("#tab2");
        }
        return focusTab;
    }

    function select(){

    }

    function mouseDown(tab){
        const focusTab = focus(tab);
        focusTab.className = "mouse-down"
        document.querySelector(".focused-header").className = "unfocused-header";
        console.log(focusTab);
    }

    function focusWindow(tab){
        const focusTab = focus(tab);
        const toUnfocus = document.querySelector(".focus");
        if (focusTab.className != "focus"){
            focusTab.className = "focus";
        }
        if (focusTab == document.querySelector("#tab1") && toUnfocus.getAttribute("id") == "tab2"){
            document.querySelector("#header-p").className = "focused-header";
            document.querySelector("#header-n").className = "unfocused-header";
            toUnfocus.className = "unfocus";
        } else if (focusTab == document.querySelector("#tab2") && toUnfocus.getAttribute("id") == "tab1"){
            document.querySelector("#header-p").className = "unfocused-header";
            document.querySelector("#header-n").className = "focused-header";
            toUnfocus.className = "unfocus";
        }
    }

});