// Initialize progress
let progress = 0;

// Function to check the answer for a lesson
function checkAnswer(lessonId, answer) {
    const resultElement = document.getElementById(`result-${lessonId}`);
    // var audio1 = document.getElementById('audio1');
    // var audio2 = document.getElementById('audio2');

    // Variables for DS animations
    // var dsAnimation, ds2Animation, coinAnimation;
    
    if (answer === 'correct') {
        resultElement.textContent = "Correct! Well done!";
        resultElement.style.color = "green";
        updateProgress();
        document.getElementById('next-lesson').style.display = "inline-block";
        // Add a click event listener to trigger animations and audio
        window.addEventListener('click', function() {
            // Remove the event listener after first click to avoid multiple triggers
            window.removeEventListener('click', arguments.callee);

            //Load forest animation
            var forestAnimation = lottie.loadAnimation({
                container: document.getElementById('forest-animation'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'forest.json'  // Path to forest.json file
            });

            // Load and play DS1 animation and sync with first audio
            dsAnimation = lottie.loadAnimation({
                container: document.getElementById('ds-animation'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: 'DS.json'  // Path to DS1.json file
            });
        

            dsAnimation.addEventListener('DOMLoaded', function() {
                audio1.currentTime = 0; // Reset first audio
                audio1.play(); // Play first audio when DS1 animation starts
                setTimeout(function() {
                    document.getElementById('ds-animation').style.display = 'none'; // Hide the animation
                }, 6000); 
            });

            // Load DS2 animation after DS1 has started and sync with second audio
            setTimeout(function() {
                ds2Animation = lottie.loadAnimation({
                    container: document.getElementById('ds2-animation'),
                    renderer: 'svg',
                    loop: true,
                    autoplay: false, // Will start manually when audio2 plays
                    path: 'DS2.json'  // Path to DS2.json file
                }, 2000);

                // Play DS2 animation when audio2 starts
                audio2.addEventListener('play', function() {
                    ds2Animation.goToAndPlay(0, true); // Start DS2 animation
                });

                // Play second audio after DS2 animation loads
                ds2Animation.addEventListener('DOMLoaded', function() {
                    audio2.currentTime = 0; // Reset second audio
                    audio2.play(); // Start second audio
                    setTimeout(function() {
                        document.getElementById('ds2-animation').style.display = 'none'; // Hide the animation
                    }, 4500);
                });
            }, 2000); // Start DS2 after a 2-second delay
            
            // coinAnimation = lottie.loadAnimation({
            //     container: document.getElementById('coin-animation'), // The DOM element that will contain the animation
            //     renderer: 'svg', // Rendering type: 'svg', 'canvas', or 'html'
            //     loop: true, // Loop the animation
            //     autoplay: true, // Start playing the animation automatically
            //     path: 'coin.json' // Path to the animation JSON
            // });
        });
    } else {
        resultElement.textContent = "Wrong! Try again.";
        resultElement.style.color = "red";
    }
console.log('working-fine')
}

document.getElementById('playButton').addEventListener('click', function() {
    const audio = document.getElementById('audio2');
    audio.play();
});

// Function to update progress
function updateProgress() {
    progress += 25; // Increase progress by 25% for each correct answer
    const progressValue = document.getElementById('progress-value');
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
    document.getElementById('progress-value').textContent = progress;
    document.getElementById('next-lesson').style.display = "none";
    const resultElements = document.querySelectorAll('[id^="result-"]');
    resultElements.forEach(result => result.textContent = "");
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

// var animation = lottie.loadAnimation({
//     container: document.getElementById('coin-animation'), // The DOM element that will contain the animation
//     renderer: 'svg', // Rendering type: 'svg', 'canvas', or 'html'
//     loop: true, // Loop the animation
//     autoplay: true, // Start playing the animation automatically
//     path: 'coin.json' // Path to the animation JSON
// });