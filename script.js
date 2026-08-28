const surprise = document.getElementById("surprise");
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");
const closeLetter = document.getElementById("closeLetter");
const celebrateBtn = document.getElementById("celebrateBtn");

const notes = {
  ankush: {
    title: "For Ankush ❤️",
    text: "You've grown up so much, but you'll always have a special place in my heart as my little brother. I hope life gives you lots of reasons to smile, lots of things to be proud of, and people who always have your back. And yes... I reserve the right to annoy you forever. Happy Raksha Bandhan! 🫶"
  },
  pankush: {
    title: "For Pankush ❤️",
    text: "From those childhood days to the teenager you are now, it's been so special watching you grow. I hope you always stay happy, confident and kind. No matter how old we get or how much we tease each other, you'll always be my little brother. Happy Raksha Bandhan! 🫶"
  }
};

openBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surprise.scrollIntoView({ behavior: "smooth" });
  makePetals(18);
});

document.querySelectorAll(".note-card").forEach(card => {
  card.addEventListener("click", () => {
    const data = notes[card.dataset.note];
    letterTitle.textContent = data.title;
    letterText.textContent = data.text;
    letter.classList.remove("hidden");
  });
});

closeLetter.addEventListener("click", () => {
  letter.classList.add("hidden");
});

letter.addEventListener("click", (e) => {
  if (e.target === letter) letter.classList.add("hidden");
});

celebrateBtn.addEventListener("click", () => {
  makeConfetti(110);
  makePetals(30);
  celebrateBtn.textContent = "Happy Raksha Bandhan! ❤️";
  setTimeout(() => celebrateBtn.textContent = "Celebrate again! 🎉", 2200);
});

function makePetals(count) {
  const holder = document.querySelector(".petals");
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.textContent = ["🌸", "🌼", "🪷", "✨"][Math.floor(Math.random() * 4)];
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (4 + Math.random() * 5) + "s";
    p.style.animationDelay = (Math.random() * 1.2) + "s";
    holder.appendChild(p);
    setTimeout(() => p.remove(), 10000);
  }
}

function makeConfetti(count) {
  const holder = document.getElementById("confetti");
  for (let i = 0; i < count; i++) {
    const c = document.createElement("span");
    c.className = "confetto";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDelay = (Math.random() * .5) + "s";
    c.style.transform = `rotate(${Math.random()*180}deg)`;
    holder.appendChild(c);
    setTimeout(() => c.remove(), 2400);
  }
}
