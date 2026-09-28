const introScreen = document.getElementById("introScreen");
const enterButton = document.getElementById("enterButton");
const backgroundMusic = document.getElementById("backgroundMusic");

enterButton.addEventListener("click", function () {
  // =========================
  // MUSIC
  // =========================
backgroundMusic.volume = 0.3;

// شروع موسیقی از ثانیه 4
backgroundMusic.currentTime = 4;

backgroundMusic
  .play()
  .then(function () {
    console.log("Music started from 4 seconds!");
  })
  .catch(function (error) {
    console.log("Music error:", error);
  });

  // =========================
  // HIDE INTRO
  // =========================

  introScreen.classList.add("hide");

  // =========================
  // ENABLE SCROLL
  // =========================

  document.body.style.overflow = "auto";

  setTimeout(function () {
    introScreen.style.display = "none";
  }, 1500);
});

// =========================
// REVEAL ANIMATION
// =========================

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".reveal").forEach(function (element) {
  observer.observe(element);
});

// =========================
// START WITH SCROLL LOCK
// =========================

document.body.style.overflow = "hidden";


// =====================================
// JACK SPARROW SURPRISE
// =====================================

const jackButton = document.getElementById("jackButton");
const jackSurprise = document.getElementById("jackSurprise");

jackButton.addEventListener("click", function () {

    jackSurprise.classList.toggle("show");

    if (jackSurprise.classList.contains("show")) {

        jackButton.textContent = "⚓ کاپیتان را پیدا کردی";

        setTimeout(function () {

            jackSurprise.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

    } else {

        jackButton.textContent = "جک اسپارو";

    }

});
