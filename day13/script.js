// .............for chacking it is online or ofline..........
window.addEventListener("load", (event) => {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = navigator.onLine ? "Online" : "OFFline";
  });

  window.addEventListener("offline", (event) => {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = "Offline";
  });
  
  window.addEventListener("online", (event) => {
    const statusDisplay = document.getElementById("status");
    statusDisplay.textContent = "Online";
  }); 

  

// ...............for loderand form page.......
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}