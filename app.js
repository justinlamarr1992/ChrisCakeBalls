// const openModalButtons = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");
// const openModalPicture = document.querySelectorAll("[data-modal-target]");
// const closeModalButtons = document.querySelectorAll("[data-close-button]");
// const overlay = document.getElementById("overlay");

// test
var modal = document.getElementById("modal1");
var pic = document.getElementById("modalPic");
var closeButton = document.getElementsByClassName("close-button")[0];
pic.onmouseover = function () {
  modal.style.display = "block";
};
// pic.onmouseout = function () {
//   modal.style.display = "none";
// };
closeButton.onClick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function myFunction() {
  var x = document.getElementById("myNavBar");

  if (x.className === "navBar") {
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

// openModalPicture.forEach((img) => {
//   img.addEventListener("click", () => {
//     const modal = document.querySelector(img.dataset.modalTarget);
//     openModal(modal);
//   });
// });
// openModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = document.querySelector(button.dataset.modalTarget);
//     openModal(modal);
//   });
// });
// closeModalButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const modal = button.closest(".modal");
//     closeModal(modal);
//   });
// });

// overlay.addEventListener("click", () => {
//   const modals = document.querySelectorAll(".modal.active");
//   modals.forEach((modal) => {
//     closeModal(modal);
//   });
// });

// function openModal(modal) {
//   if (modal == null) return;
//   modal.classList.add("active");
//   overlay.classList.add("active");
// }
// function closeModal(modal) {
//   if (modal == null) return;
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// }
