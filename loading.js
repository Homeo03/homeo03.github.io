document.addEventListener("DOMContentLoaded", function(){
    const taskbar = document.getElementById("taskbar");
    const tabs = Array.from(document.querySelectorAll(`[id^="tab"]`));
    const apps = document.getElementById("homeapps");
    const paint = document.getElementById("paint");
    const notepad = document.getElementById("notepad");
    const body = document.querySelector("body");
        let toFlatten = Array(taskbar, apps, tabs, paint, notepad);
    const toLoad = toFlatten.flat();



    setTimeout(loadContent, 500);
    randCursor();

    function randCursor(){
        setTimeout(clearIntervals, 6000);
        let rand;
        let = intervalID = setInterval(reRandCursor, 50);
        
        function reRandCursor(){
            rand = Math.floor(Math.random()*550) + 200;
            console.log("reRand " + rand);
            setTimeout(loadCursor, rand, rand);
        }
        
        function loadCursor(rand){
            if(rand > 400){
                body.style.cursor = "progress";
                console.log("wait " + rand);
            } else {
                body.style.cursor = "default";
                console.log("progess " + rand);
            }
        }

        function clearIntervals(){
            clearInterval(intervalID);
            setTimeout(cursorAuto, 1000);
            function cursorAuto() {
                body.style.cursor = "auto";
            }
            console.log("clearIntervals ------------------------------------------------------------------");
        }
    }

    function loadContent(){
        let a = 0;
        let random; 
        toLoad.forEach(function(currentValue, currentIndex){
            random = Math.floor(Math.random()*(a+1000)) + (a+501);
            setTimeout(display, random, currentValue, currentIndex);
            console.log("toLoad" + random);
            a = a+500;
        });
    }

    function display(a, b){
        if (b == 0){
            a.style.display = "flex"
        } else if (b == 1 || b == 2 || b == 3){
            a.style.display = "inline-flex"
        } else if (b == 4 || b == 5){
            a.style.display = "inline-block"
        }
    }
});