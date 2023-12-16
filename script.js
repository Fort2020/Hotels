const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelectorAll(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      homeSection = document.querySelector(".home");

// Function to load content into the right window
const loadContent = (content) => {
  homeSection.innerHTML = content;
};

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

searchBtn.addEventListener("click", () => {
  body.classList.remove("close");
});

toggle.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target;

    // Check if the clicked button is the "Home" link
    if (target.tagName === "A" && target.innerText === "HOME") {
      console.log("Home link clicked");

      // Load the content of home.html into the right window
      fetch("home.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.status}`);
          }
          return response.text();
        })
        .then((htmlContent) => {
          console.log("Content fetched successfully");
          loadContent(htmlContent);
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
        });
    }

    sidebar.classList.toggle("close");
    homeSection.classList.toggle("move-right");

    if (body.classList.contains("dark")) {
      modeText.innerText = "Light Mode";
    } else {
      modeText.innerText = "Dark Mode";
    }
  });
});
