const target = document.getElementById("header__nav");
target.addEventListener('click', () => {
  const target = document.getElementById("header__nav");
  target.classList.toggle('open');
  const nav = document.getElementById("header__nav");
  nav.classList.toggle('in');
});