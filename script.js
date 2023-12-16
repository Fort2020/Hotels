const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelectorAll(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

searchBtn.addEventListener("click", () => {
  body.classList.remove("close");
});

toggle.forEach((button) => {
  button.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  
    if(body.classList.contains("dark")) {
      modeText.innerText = "Light Mode"
    } else {
      modeText.innerText = "Dark Mode"
    }
    });
});