//welcome the user
//alert("Welcome to Quiz Ninja!")

// let question = "What is Superman's real name?"
// let answer = prompt(question)
// alert("You answered " + answer)

//nested array with questions and answers
let quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

//initialize a variable called score to keep track of the correct answers
let score = 0;

//invoke function play before the function as it will be hoisted
play(quiz);

//function definition
function play(quiz) {
    //main game loop

    //declare variables outside for loop so that all functions will have access to them(let is not hoisted like var)
    let i, question, answer, max;
    for(i = 0; max = quiz.length, i < max; i++) {
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }
    //end of main game loop
    gameOver();

    //nested functions

    function ask(question) {
        return prompt(question);
    }

    function check(answer) {
        //check if answer is correct
        if (answer === quiz[i][1]) {
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

