// JavaScript Document
console.log("Howdy!");





// KAST
// hulp gehad van Sam Landsdaal bij de gehele structuur voor de tekstblokken bij de afbeeldingen 
// heb 1 lijstje in kast en 1 schilderij samen gedaan en de rest zelf toegepast

// lijstje in kast 1
var planeCrazy = document.querySelector("main > ol > li:first-of-type > article.kast1");

var kast1 = document.querySelector(".planeCrazy");
kast1.addEventListener("click", functieOverlay2);

function functieOverlay2() {
    planeCrazy.classList.toggle("verstopt");
}

// lijstje in kast 2
var bandConcert = document.querySelector("main > ol > li:first-of-type > article.kast2");

var kast2 = document.querySelector(".bandConcert");
kast2.addEventListener("click", functieOverlay3);

function functieOverlay3() {
    bandConcert.classList.toggle("verstopt");
}

// lijstje in kast 3
var simpleThings = document.querySelector("main > ol > li:first-of-type > article.kast3");

var kast3 = document.querySelector(".simpleThings");
kast3.addEventListener("click", functieOverlay4);

function functieOverlay4() {
    simpleThings.classList.toggle("verstopt");
}

// lijstje in kast 4
var clubhouse = document.querySelector("main > ol > li:first-of-type > article.kast4");

var kast4 = document.querySelector(".clubhouse");
kast4.addEventListener("click", functieOverlay5);

function functieOverlay5() {
    clubhouse.classList.toggle("verstopt");
}




// ANIMATIE MUZIEKNOTEN
// deze heb ik geheel zelf gedaan op basis van de eerdere hulp van eerdere uitleg van Sam Landsdaal
var radio = document.querySelector("main > ol > li:first-of-type > img.muziek");

var muziek = document.querySelector(".radio");
muziek.addEventListener("mouseover", functieOverlay9);

function functieOverlay9() {
    radio.classList.toggle("verstopt2");
}




// ANIMATIE AUDIO
// hulp gehad bij audio aan/uit van Timo en knop aan/uit van Sanne
var geluidAan = document.querySelector(".geluid");

var audioBestand = document.querySelector("main> ol > li:first-of-type > audio");
geluidAan.addEventListener("click", muziekSpeelt);

function muziekSpeelt() {
    if (audioBestand.paused ) {
        audioBestand.play();
        geluidAan.classList.add("playing");
    } else {
        audioBestand.pause();
        geluidAan.classList.remove("playing");
    }
}




// GALERIJ
// hulp gehad van Sam Landsdaal bij de gehele structuur voor de tekstblokken bij de afbeeldingen 
// heb 1 lijstje in kast en 1 schilderij samen gedaan en de rest zelf toegepast

// schilderij 1
var braveLittleTailor = document.querySelector("main > ol > li:last-of-type > article.schilderij1");

var schilderij1 = document.querySelector(".braveLittleTailor");
schilderij1.addEventListener("click", functieOverlay);

function functieOverlay() {
    braveLittleTailor.classList.toggle("verstopt");
}

// schilderij 2
var fantasia = document.querySelector("main > ol > li:last-of-type > article.schilderij2");

var schilderij2 = document.querySelector(".fantasia");
schilderij2.addEventListener("click", functieOverlay6);

function functieOverlay6() {
    fantasia.classList.toggle("verstopt");
}

// schilderij 3
var christmasCarol = document.querySelector("main > ol > li:last-of-type > article.schilderij3");

var schilderij3 = document.querySelector(".christmasCarol");
schilderij3.addEventListener("click", functieOverlay7);

function functieOverlay7() {
    christmasCarol.classList.toggle("verstopt");
}

// schilderij 4
var mickeyMouseWorks = document.querySelector("main > ol > li:last-of-type > article.schilderij4");

var schilderij4 = document.querySelector(".mickeyMouseWorks");
schilderij4.addEventListener("click", functieOverlay8);

function functieOverlay8() {
    mickeyMouseWorks.classList.toggle("verstopt");
}
