
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
let $question = document.getElementById("question")
let $score = document.getElementById("score")
let $feedback = document.getElementById("feedback")

//initialize a variable called score to keep track of the correct answers
let score = 0;

//invoke function play before the function as it will be hoisted
play(quiz);

//function definition
function play(quiz) {
    //main game loop

    //declare variables outside for loop so that all functions will have access to them(let is not hoisted like var)
    let i, question, answer, max;
    for(i = 0; max = quiz.questions.length, i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }
    //end of main game loop
    gameOver();

    //nested functions

    function ask(question) {
        return prompt(quiz.question + question);
    }

    function check(answer) {
        //check if answer is correct
        if (answer === quiz.questions[i].answer) {
            alert("Correct");
            //increase score for correct answer
            score++;
        } else {
            alert("Wrong")
        }
    }

    function gameOver() {
        alert("Game over, you scored " + score + " points");
    }
}

