// Initialize progress
let progress = 0;

// Function to check the answer for a lesson
function checkAnswer(lessonId, answer) {
  const resultElement = document.getElementById(`result-${lessonId}`);

  if (answer === "correct") {
    resultElement.textContent = "Correct! Well done!";
    resultElement.style.color = "green";
    updateProgress();
    document.getElementById("next-lesson").style.display = "inline-block";
  } else {
    resultElement.textContent = "Wrong! Try again.";
    resultElement.style.color = "red";
  }
}

// Function to update progress
function updateProgress() {
  progress += 25; // Increase progress by 25% for each correct answer
  const progressValue = document.getElementById("progress-value");
  progressValue.textContent = progress;

  if (progress >= 100) {
    progressValue.textContent = "100";
    alert("Congratulations! You've completed all lessons.");
  }
}

// Function to show the next lesson (for future implementation)
function showNextLesson() {
  alert("Next lesson coming soon!"); // Placeholder
  // You can add functionality here to load the next lesson
}

// Function to reset progress
function resetProgress() {
  progress = 0;
  document.getElementById("progress-value").textContent = progress;
  document.getElementById("next-lesson").style.display = "none";
  const resultElements = document.querySelectorAll('[id^="result-"]');
  resultElements.forEach((result) => (result.textContent = ""));
}

// const cube = document.getElementById('cube');
// const toggleBtn = document.getElementById('toggleBtn');
// let rotating = true;

// toggleBtn.addEventListener('click', () => {
//     if (rotating) {
//         cube.style.animation = 'none'; // Stop the rotation
//         toggleBtn.textContent = 'Start Rotation';
//     } else {
//         cube.style.animation = 'rotate 10s infinite linear'; // Restart the rotation
//         toggleBtn.textContent = 'Stop Rotation';
//     }
//     rotating = !rotating; // Toggle the state
// });

var animation = lottie.loadAnimation({
  container: document.getElementById("lottie"), // The DOM element that will contain the animation
  renderer: "svg", // Rendering type: 'svg', 'canvas', or 'html'
  loop: true, // Loop the animation
  autoplay: true, // Start playing the animation automatically
  path: "coin.json", // Path to the animation JSON
});
