//change the variable quiz to an object instead of array - above code
let quiz = {
  name: "Super Hero Name Quiz",
  description: "How many super heroes can you name?",
  question: "What is the real name of ",
  questions: [
    { question: "Superman", answer: "Clark Kent" },
    { question: "Batman", answer: "Bruce Wayne" },
    { question: "Wonder Woman", answer: "Diana Prince" },
  ],
};
//DOM references//
let $question = document.getElementById("question");
let $score = document.getElementById("score");
let $feedback = document.getElementById("feedback");
let $start = document.getElementById("start");
let $form = document.getElementById("answer");
let $timer = document.getElementById("timer");

//add function to update an element on the page
function update(element, content, klass) {
  let p = element.firstChild || document.createElement("p");
  p.textContent = content;
  element.appendChild(p);
  if (klass) {
    p.className = klass;
  }
}

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}
//event listeners
$start.addEventListener(
  "click",
  function () {
    play(quiz);
  },
  false
);

// hide the form at the start of the game
hide($form);

//function definition
function play(quiz) {
  //initialize a variable called score to keep track of the correct answers
  let score = 0;
  update($score, score);

  // initialize time and set up an interval that counts down every second
  let time = 20;
  update($timer, time);
  let interval = window.setInterval(countDown, 1000);

  // hide button and show form
  hide($start);
  show($form);

  // add event listener to form for when it's submitted
  $form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      check($form[0].value);
    },
    false
  );

  let i = 0;
  chooseQuestion();
  //gameOver();

  //nested functions
  function chooseQuestion() {
    let question = quiz.questions[i].question;
    ask(question);
  }

  function ask(question) {
    //add paragraph element to question section
    update($question, quiz.question + question);
    $form[0].value = "";
    $form[0].focus();
  }

  function check(answer) {
    //check if answer is correct
    if (answer === quiz.questions[i].answer) {
      //add paragraph element to feedback section, "right" (3rd argument in the update function)- is the klass argument for the update function
      update($feedback, "Correct!", "right");
      //increase score for correct answer
      score++;
      update($score, score);
    } else {
      update($feedback, "Wrong!", "wrong"); //"wrong" (3rd argument in the update function) - is the klass argument for the update function
    }
    i++;
    if (i === quiz.questions.length) {
      gameOver();
    } else {
      chooseQuestion();
    }
  }

  // this is called every second and decreases the time
  function countDown() {
    // decrease time by 1
    time--;
    // update the time displayed
    update($timer, time);
    // the game is over if the timer has reached 0
    if (time <= 0) {
      gameOver();
    }
  }

  function gameOver() {
    //updating the question section using "Game over" message to replace the last question asked
    update($question, "Game over, you scored " + score + " points");

    // stop the countdown interval
    window.clearInterval(interval);

    hide($form);
    show($start);
  }
}
