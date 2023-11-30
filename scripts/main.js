let myImage = document.querySelector("img");
myImage.addEventListener("click", function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/koko.jpg") {
        myImage.setAttribute("src", "images/firefox2.jpg");
    } else {
        myImage.setAttribute("src", "images/koko.jpg");
    }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Veuillez saisir votre nom");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Yesmé la meilleure," + myName;
}
if (!localStorage.getItem("nom")) {
    setUserName();
} else {
    let storeName = localStorage.getItem("nom");
    myHeading.textContent = "Yesmé est la meilleure" + storeName;
}
myButton.addEventListener("click", function(){
    setUserName();
});