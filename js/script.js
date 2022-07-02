var cars = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

var nextlink = document.querySelector("#nextLink");
var beforeLink = document.querySelector("#beforeLink")


var currentPic = 0;



//functiona


function processNext() {
    currentPic++
    if (currentPic == cars.length) {
        currentPic = 0;


    }

    document.querySelector("#pic").src = "img/" + cars[currentPic];

}

function processPrev() {

    if (currentPic == 0) {
        currentPic = cars.length;
    }
    currentPic--
    document.querySelector("#pic").src = "img/" + cars[currentPic];
}

setInterval(processPrev , 2000)   

//event
nextlink.addEventListener("click", function () {
    processNext()
})
beforeLink.addEventListener("click", function () {
    processPrev()
})
