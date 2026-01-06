const textEL = document.querySelector(".text");

const careers = [
  "Student",
  "Frontend Developer",
  "Web Developer",
  "Problem Solver"
];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
  characterIndex++;
  textEL.textContent = careers[careerIndex].slice(0, characterIndex);

  if (characterIndex > careers[careerIndex].length) {
    setTimeout(() => {
      careerIndex++;
      characterIndex = 0;

      if (careerIndex >= careers.length) {
        careerIndex = 0;
      }

      updateText(); 
    }, 1000);
    return;
  }

  setTimeout(updateText, 200);
}
