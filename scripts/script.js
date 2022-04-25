// JavaScript Document
console.log("Howdy!");

var planecrazy = document.querySelector("main > ol > li:first-of-type > article.kast1");

var kast1 = document.querySelector(".planecrazy");
kast1.addEventListener("click", functieOverlay2);

function functieOverlay2() {
    planecrazy.classList.toggle("verstopt");
}


var bandconcert = document.querySelector("main > ol > li:first-of-type > article.kast2");

var kast2 = document.querySelector(".bandconcert");
kast2.addEventListener("click", functieOverlay3);

function functieOverlay3() {
    bandconcert.classList.toggle("verstopt");
}


var simplethings = document.querySelector("main > ol > li:first-of-type > article.kast3");

var kast3 = document.querySelector(".simplethings");
kast3.addEventListener("click", functieOverlay4);

function functieOverlay4() {
    simplethings.classList.toggle("verstopt");
}


var clubhouse = document.querySelector("main > ol > li:first-of-type > article.kast4");

var kast4 = document.querySelector(".clubhouse");
kast4.addEventListener("click", functieOverlay5);

function functieOverlay5() {
    clubhouse.classList.toggle("verstopt");
}







var bravelittletailor = document.querySelector("main > ol > li:last-of-type > article.schilderij1");

var schilderij1 = document.querySelector(".bravelittletailor");
schilderij1.addEventListener("click", functieOverlay);

function functieOverlay() {
    bravelittletailor.classList.toggle("verstopt");
}


var fantasia = document.querySelector("main > ol > li:last-of-type > article.schilderij2");

var schilderij2 = document.querySelector(".fantasia");
schilderij2.addEventListener("click", functieOverlay6);

function functieOverlay6() {
    fantasia.classList.toggle("verstopt");
}


var christmascarol = document.querySelector("main > ol > li:last-of-type > article.schilderij3");

var schilderij3 = document.querySelector(".christmascarol");
schilderij3.addEventListener("click", functieOverlay7);

function functieOverlay7() {
    christmascarol.classList.toggle("verstopt");
}


var mickeymouseworks = document.querySelector("main > ol > li:last-of-type > article.schilderij4");

var schilderij4 = document.querySelector(".mickeymouseworks");
schilderij4.addEventListener("click", functieOverlay8);

function functieOverlay8() {
    mickeymouseworks.classList.toggle("verstopt");
}





var radio = document.querySelector("main > ol > li:first-of-type > img.muziek");

var muziek = document.querySelector(".radio");
muziek.addEventListener("mouseover", functieOverlay9);

function functieOverlay9() {
    radio.classList.toggle("verstopt2");
}



