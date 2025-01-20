const viewButtons = document.querySelectorAll(".viewbutton");
const overlay = document.querySelector(".overlay");
const overlayImage = document.querySelector(".overlay__inner img");
const closeButton = document.querySelector(".close");

function open(e) {
  e.preventDefault(); // Prevent any default button behavior
  e.stopPropagation(); // Stop event from bubbling up
  overlay.classList.add("open");
  // Go up to the project div and find its image
  const projectImage = e.currentTarget
    .closest(".project")
    .querySelector(".project__image");
  overlayImage.src = projectImage.src;
}

function close(e) {
  e.preventDefault();
  e.stopPropagation();
  overlay.classList.remove("open");
}

viewButtons.forEach((button) => button.addEventListener("click", open));
closeButton.addEventListener("click", close);
// Only close when clicking the overlay background, not its children
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    close(e);
  }
});
