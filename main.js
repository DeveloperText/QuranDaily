particlesJS.load("container", "particle.json", function () {
  console.log("callback - particle.js config loaded");
});


// let data = "";
// document.querySelector(".verse").textContent.split(" ").forEach(text => {
//   if(text) data += `<span>${text}</span>`;
// })

// document.querySelector(".verse").innerHTML = data;


// let datas = document.querySelectorAll(".verse span")

document.querySelector(".logo i.fa").addEventListener("click", (e) => {
  e.target.classList.toggle("fa-pause");
  e.target.classList.toggle("fa-play");
})