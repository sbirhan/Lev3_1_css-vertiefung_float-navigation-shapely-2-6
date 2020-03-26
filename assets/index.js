var hMenuNav=document.getElementById("hamMenuNav")
var navi=document.getElementById("nav")
var drwer=document.getElementById("drawer")


function load() {
    
    drwer.style.visibility = "hidden"

    return;
}

function size() {
    var w=document.documentElement.clientWidth;

    if (w<1200) {
        navi.style.visibility="hidden";
        hMenuNav.style.visibility="visible";
    }

    return;
}

function resize() {
    var w1=document.documentElement.clientWidth;

    if (w1>1200) {
        navi.style.visibility="visible";
        hMenuNav.style.visibility="hidden";
        drwer.style.visibility="hidden";
    }
    else {
        navi.style.visibility="hidden";
        hMenuNav.style.visibility="visible";
    }

    return;
}


function moveDrawer() {

    if (drwer.style.visibility==="hidden") {
        drwer.style.visibility="visible";
    }
    else {
        drwer.style.visibility="hidden";
    }

    return;
}



size();

resize();

moveDrawer();

load();