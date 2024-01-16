// Get all the toggle questions
const questions = document.querySelectorAll(".question-toggle-btn");

function activeQuestion(event) {
  const question = event.currentTarget;
  const controlsID = question.getAttribute("aria-controls");
  const answer = document.getElementById(controlsID);

  answer.classList.toggle("active");

  const active = answer.classList.contains("active");
  question.setAttribute("aria-expanded", active);
}

function questionEvents(question) {
  question.addEventListener("click", activeQuestion);
}

questions.forEach(questionEvents);

// Get all the toggle buttons
const toggleButtons = document.querySelectorAll('.question-toggle-btn');

// Iterate over each toggle button and Add event listeners to toggle the button's active class
toggleButtons.forEach((button) => {
  button.addEventListener('click', function() {
    // Toggle the button icon
    button.classList.toggle('active');

    // Get the corresponding question element
    const questionId = button.getAttribute('aria-controls');
    const question = document.getElementById(questionId);

    // Toggle the question visibility
    question.classList.toggle('show');
  });
});



