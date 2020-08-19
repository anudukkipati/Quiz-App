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

//event listeners
$start.addEventListener('click', function() {play(quiz)}, false)


//invoke function play before the function as it will be hoisted
//play(quiz);

//function definition
function play(quiz) {
    //initialize a variable called score to keep track of the correct answers
    let score = 0;
    update($score, score);

    //main game loop

    //declare variables outside for loop so that all functions will have access to them(let is not hoisted like var)
    // let i, question, answer, max;
    // for(i = 0; max = quiz.questions.length, i < max; i++) {
    //     question = quiz.questions[i].question;
    //     answer = ask(question);
    //     check(answer);
    // }
    let i = 0;
    chooseQuestion()
    //end of main game loop
    gameOver();

    //nested functions
    function chooseQuestion() {
        let question = quiz.question[i].question;
        ask(question);
    }

    function ask(question) {
        //add paragraph element to question section
        update($question, quiz.question + question);
        //return prompt("Enter your answer:");
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
    }

    function gameOver() {
        //updating the question section using "Game over" message to replace the last question asked
        update($question, "Game over, you scored " + score + " points");
    }
}




