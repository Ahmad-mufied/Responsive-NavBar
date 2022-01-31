const body = document.querySelector('body'),
  nav = document.querySelector('nav'),
  modeToggle = document.querySelector('.dark-light'),
  searchToggle = document.querySelector('.searchToggle'),
  siderbarOpen = document.querySelector('.siderbarOpen'),
  siderbarClose = document.querySelector('.siderbarClose');

  let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
      body.classList.add("dark");
    }
  

// Js code to toggle dark and light mode
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");

  // js code to keep user selected mode even page refresh or file reopen
  if(!body.classList.contains("dark")) {
    localStorage.setItem("mode", "light-mode");
  }else{
    localStorage.setItem("mode", "dark-mode");
  }
});


// Js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});


// Js code to toggle sidebar
siderbarOpen.addEventListener("click", () =>{
  nav.classList.add("active");
});

body.addEventListener("click", e => {
  let clickedElm = e.target;

  if (!clickedElm.classList.contains("siderbarOpen") && !clickedElm.classList.contains("menu")) {
    nav.classList.remove("active");
  }
});
