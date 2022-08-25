
const GITHUB_URL = "https://api.github.com/users/naelachkar";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
    
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("profile-name");
    profileName.innerHTML = data.name;
  });

function animation() {
  const body = document.body;
  const card = document.getElementById("animation");

  function switching() {
    if (card !== event.target) {return}; /* no children trigger switching */
    if (body.classList.contains("triggered")) {
      body.classList.remove("triggered");
      body.style.backgroundImage = "linear-gradient(to top, #CCC, white)";
    } else {
      body.classList.add("triggered");
      body.style.backgroundImage = "linear-gradient(to top, #333, black)";
    }
  }

  card.addEventListener("click", switching);
}

animation();