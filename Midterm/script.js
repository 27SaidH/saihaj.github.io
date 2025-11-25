const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.id = "scrollToTop";
document.body.appendChild(scrollBtn);

scrollBtn.style.display = "none";
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

const greeting = document.createElement("p");
greeting.id = "greeting";
document.querySelector("header").appendChild(greeting);

const hour = new Date().getHours();
if (hour < 12) {
  greeting.textContent = "Good morning and welcome!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon and welcome!";
} else {
  greeting.textContent = "Good evening and welcome!";
}
