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

//loop through the quiz array to prompt question to users

for (let i = 0, max = quiz.length; i < max; i++) {
    //prompt user the question
   // let question = quiz[i][0];
    //get answer from user
    let answer = prompt(quiz[i][0]);

    //check if answer is correct
    if (answer === quiz[i][1]) {
        alert("Correct");
        //increase score for correct answer
        score++;
    } else {
        alert("Wrong")
    }
}

//tell user the score
alert("Game over, you scored " + score + " points");