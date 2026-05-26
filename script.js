const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if(document.body.classList.contains("light-mode")){

    toggleBtn.textContent = "☀️";

  }else{

    toggleBtn.textContent = "🌙";
  }
});
const texts = [
  "Frontend Developer",
  "Cybersecurity Enthusiast",
  "UI Designer"
];

let speed = 100;

const textElements = document.getElementById("typing-text");

let textIndex = 0;
let charIndex = 0;

function typeWriter(){

  if(charIndex < texts[textIndex].length){

    textElements.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  }else{

    setTimeout(eraseText, 1500);
  }
}

function eraseText(){

  if(textElements.innerHTML.length > 0){

    textElements.innerHTML = textElements.innerHTML.slice(0, -1);

    setTimeout(eraseText, 50);

  }else{

    textIndex++;

    if(textIndex >= texts.length){

      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
