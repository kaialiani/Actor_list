const actorsUrl = "actors.json";
const actorList = document.querySelector(".actor-list");
const popup = document.querySelector(".popup");
const actorName = document.querySelector("#actor-name");
const actorMovie = document.querySelector("#actor-movie");
const closePopup = document.querySelector("#close-popup");

fetch(actorsUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((actor) => {
      const li = document.createElement("li");
      li.textContent = actor.name;
      li.addEventListener("click", () => {
        actorName.textContent = actor.name;
        actorMovie.textContent = actor.movie;
        popup.style.display = "block";
      });
      actorList.appendChild(li);
    });
  })
  .catch((error) => console.error(error));

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
