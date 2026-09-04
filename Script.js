let selected = null;

const id = document.getElementById("playerId");
const showId = document.getElementById("showId");
const showPackage = document.getElementById("showPackage");
const showPrice = document.getElementById("showPrice");

document.querySelectorAll(".package").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".package")
      .forEach(x => x.classList.remove("selected"));

    btn.classList.add("selected");
    selected = btn;

    showPackage.textContent = btn.dataset.diamond;
    showPrice.textContent = btn.dataset.price;
  });
});

id.addEventListener("input", () => {
  showId.textContent = id.value.trim() || "—";
});

document.getElementById("orderBtn").addEventListener("click", () => {
  const player = id.value.trim();
  const msg = document.getElementById("message");

  if (!player) {
    msg.textContent = "আগে Player ID দিন।";
    return;
  }

  if (!/^\d+$/.test(player)) {
    msg.textContent = "Player ID-তে শুধু সংখ্যা ব্যবহার করুন।";
    return;
  }

  if (!selected) {
    msg.textContent = "একটি Diamond package নির্বাচন করুন।";
    return;
  }

  msg.textContent =
    `Demo order তৈরি হয়েছে: ${selected.dataset.diamond} • ${selected.dataset.price}`;
});
