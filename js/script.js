const links = document.querySelectorAll(`nav li`);
const showlinks = document.querySelector(`.links`);
const burger = document.querySelector(`.icon-burger`);

for (const link of links) {
  link.addEventListener(`click`, () => {
    link.closest(`ul`).classList.add(`close`);
    link.closest(`ul`).classList.remove(`open`);
  });
}

burger.addEventListener(`click`, () => {
  showlinks.classList.add(`open`);
  showlinks.classList.remove(`close`);
});
