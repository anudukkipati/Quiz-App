//change the variable quiz to an object instead of array - above code
let quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions":[
        {"question": "Superman", "answer": "Clark Kent"},
        {"question": "Batman", "answer": "Bruce Wayne"},
        {"question": "Wonder Woman", "answer": "Diana Prince"}
    ]
}
//DOM references//
let $question = document.getElementById("question");
let $score = document.getElementById("score");
let $feedback = document.getElementById("feedback");
let $start = document.getElementById("start")
let $form = document.getElementById("answer")

//add function to update an element on the page
function update(element, content, klass) {
    let p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if(klass) {
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
$start.addEventListener('click', function() {play(quiz)}, false)

// hide the form at the start of the game
hide($form);


//function definition
function play(quiz) {
    //initialize a variable called score to keep track of the correct answers
    let score = 0;
    update($score, score);
    // hide button and show form
    hide($start);
    show($form);

    // add event listener to form for when it's submitted
    $form.addEventListener('submit', function(event){
        event.preventDefault();
        check($form[0].value);
    }, false);

    let i = 0;
    chooseQuestion()
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
            update($feedback, "Wrong!", "wrong");//"wrong" (3rd argument in the update function) - is the klass argument for the update function
        }
        i++;
        if(i === quiz.questions.length) {
            gameOver()
        } else {
            chooseQuestion()
        }
    }

    function gameOver() {
        //updating the question section using "Game over" message to replace the last question asked
        update($question, "Game over, you scored " + score + " points");
        hide($form);
        show($start);
    }
}




