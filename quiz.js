function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";
    
    // Step 2: Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    
    // Step 3: Get the feedback element to display messages
    const feedbackElement = document.getElementById('feedback');
    
    // Step 4: Compare user's answer with correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);