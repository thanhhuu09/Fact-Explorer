const btn_shareFact = document.querySelector(".btn-share");
const form = document.querySelector("form");
console.log(btn_shareFact);

btn_shareFact.addEventListener("click", function () {
  let state = form.classList.toggle("hidden");
  console.log(state);
  if (!state) {
    btn_shareFact.textContent = "Close";
  } else {
    btn_shareFact.textContent = "Share a fact";
  }
});
