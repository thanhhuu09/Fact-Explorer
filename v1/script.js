const btn_shareFact = document.querySelector(".btn-share");
const form = document.querySelector("form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";
factsList.insertAdjacentHTML("afterbegin", "<li>Tommy</li>");
btn_shareFact.addEventListener("click", function () {
  let state = form.classList.toggle("hidden");
  console.log(state);
  if (!state) {
    btn_shareFact.textContent = "Close";
  } else {
    btn_shareFact.textContent = "Share a fact";
  }
});
