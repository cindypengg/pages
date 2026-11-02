console.log("test");
//find and name your button
// mode toggle bc button code in index.html is     <button id = "mode-toggle">Toggle dark mode</button>
const toggleButton = document.querySelector("#mode-toggle");
// "listen" for user clicking on the button
toggleButton.addEventListener("click", function(){
    //find the :root selector and toggle the dark class 
    document.querySelector(":root").classList.toggle("dark");
});
