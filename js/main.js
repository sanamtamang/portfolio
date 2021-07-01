const toggler = document.querySelector(".navbar-toggle");
const lists = document.querySelector(".lists");

const handleClick = () => {
  lists.classList.toggle("show");
};

toggler.addEventListener("click", handleClick);
