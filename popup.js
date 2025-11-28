document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM is ready!");
    const myElement = document.getElementById("myId");
    if (myElement) {
        myElement.textContent = "Content updated after DOM ready.";
    }
});