// Loading Particle.JSON for particle.js
particlesJS.load("container", "particle.json", function () {
  logger("particle.json loaded successfully, Alhamdulillah!");
});

// Logger
const logger = (message = "") =>
  console.log(
    `%c[%cQuran%cDaily%c]%c: ${message}`,
    "color:#fff; font-size: 13px",
    "color: #3d84a8; font-size: 13px",
    "color:#46cdcf; font-size: 13px",
    "color:#fff; font-size: 13px",
    "font-size: 13px"
  );

// Dom elements
const button_generate = document.getElementById("generate"); // will generate new verse
const language_bn = document.getElementById("lang_bn"); // Change the language to bangla
const language_en = document.getElementById("lang_en"); // Change the language to english
const button_play = document.getElementById("play"); // Play verse audio
const verse = document.getElementById("verse"); // Main verse
const content = document.querySelector(".content p"); // Meaning
const content_lang = document.querySelector(".content"); // Content
const reference = document.querySelector(".reference"); // Reference of the verse

// Dummy data
let data = [
  {
    verse:
      " بَرَآءَةٌ مِّنَ ٱللَّهِ وَرَسُولِهِۦٓ إِلَى ٱلَّذِينَ عَـٰهَدتُّم مِّنَ ٱلْمُشْرِكِينَ",
    translate: {
      en: "[This is a declaration of] disassociation, from Allah and His Messenger, to those with whom you had made a treaty among the polytheists. ",
      bn: "এটা সম্পর্কচ্ছেদ আল্লাহ্‌ ও তাঁর রাসূলের পক্ষ থেকে, সে সব মুশরিকদের সাথে, যাদের সাথে তোমরা পারস্পারিক চুক্তিতে আবদ্ধ হয়েছিলে",
    },
    reference: "Surah At-Taw'bah: 01",
    audio: "https://verses.quran.com/Alafasy/mp3/009001.mp3",
  },
  {
    verse: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَـٰلَمِينَ",
    translate: {
      en: "All praise is for Allah—Lord of all worlds",
      bn: "যাবতীয় প্রশংসা জগৎসমূহের প্রতিপালক আল্লাহরই জন্য।",
    },
    reference: "Surah Al Fatihah: 01",
    audio: "https://verses.quran.com/Alafasy/mp3/001002.mp3",
  },
];

const getRandom = () => data[Math.floor(Math.random() * data.length)];

var current_verse = getRandom();
update_content(current_verse, "en");

var language = "en";

function update_content(current_verse) {
  verse.textContent = current_verse.verse;
  if (language == "en") {
    content_lang.classList.remove("bn");
    content_lang.classList.add("en");
    language_en.classList.add("active");
    language_bn.classList.remove("active");
    content.textContent = current_verse.translate.en;
  } else if (language == "bn") {
    content_lang.classList.remove("en");
    content_lang.classList.add("bn");
    language_bn.classList.add("active");
    language_en.classList.remove("active");
    content.textContent = current_verse.translate.bn;
  }
  reference.textContent = current_verse.reference;
}

// todo: Generate new verse
button_generate.addEventListener("click", (e) => {
  current_verse = getRandom();
  update_content(current_verse);
});

// todo: change the language to bangla
language_bn.addEventListener("click", (e) => {
  language = "bn";
  update_content(current_verse, "bn");
});

// todo: change the language to english
language_en.addEventListener("click", (e) => {
  language = "en";
  update_content(current_verse, "en");
});

var audio;
// todo: play the beautiful quran verse
button_play.addEventListener("click", (e) => {
  button_play.classList.toggle("fa-pause");
  button_play.classList.toggle("fa-play");
  audio = new Audio(current_verse.audio);
  audio.play();
});

setInterval(() => {
  if (audio) {
    if (audio.ended) {
      console.log("done!");
      button_play.classList.toggle("fa-pause");
      button_play.classList.toggle("fa-play");
      audio = undefined;
    }
  }
}, 1000);
