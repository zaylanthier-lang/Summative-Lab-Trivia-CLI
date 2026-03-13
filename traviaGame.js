import { input } from "@inquirer/prompts";

// create an array for the questions
const questions = [
    {
        questionText: "Which country has won the most World Cups?",
        choices: ["A. U.S.A", "B. Brazil", "C. Spain"],
        correctAnswer: "B"
    },
    {
        questionText: "What does FIFA stand for in English?",
        choices: [
            "A. International Federation of Association Football",
            "B. Football",
            "C. International Football"
        ],
        correctAnswer: "A"
    },
    {
        questionText: "Simone Biles is famous for her skill in what sport?",
        choices: ["A. Football", "B. Tennis", "C. Gymnastics"],
        correctAnswer: "C"
    }
];

// create variables
let score = 0;
let currentQuestionIndex = 0;
let totalTime = 180;
let gameOver = false;
let timer;


// function for the start of the game
async function startGame() {
    console.log("Press Enter to start the quiz");

    await input({ message: "Press Enter to begin" });

    console.log("The game is starting...");

    startTimer();
    await askQuestions();
}


// function for setting the timer
function startTimer() {
    timer = setInterval(() => {

        totalTime--;

        // show time every 30 seconds
        if (totalTime % 30 === 0) {
            console.log(`Time remaining: ${totalTime} seconds`);
        }

        if (totalTime <= 0) {
            gameOver = true;

            console.log("Time is up!");

            clearInterval(timer);

            endGame();
        }

    }, 1000);
}


// function askQuestions
async function askQuestions() {

    while (currentQuestionIndex < questions.length && !gameOver) {

        const currentQuestion = questions[currentQuestionIndex];

        console.log(`\nQuestion ${currentQuestionIndex + 1}`);
        console.log(currentQuestion.questionText);

        currentQuestion.choices.forEach(choice => {
            console.log(choice);
        });

        const userAnswer = await input({ message: "Enter A, B, or C:" });

        if (userAnswer.toUpperCase() === currentQuestion.correctAnswer) {

            console.log("Correct!");
            score++;

        } else {

            console.log("Incorrect!");
            console.log(`Correct answer: ${currentQuestion.correctAnswer}`);
        }

        currentQuestionIndex++;
    }

    if (!gameOver) {
        clearInterval(timer);
        endGame();
    }
}


// function endGame
function endGame() {

    console.log("\nGame Over!");

    console.log(`Your final score: ${score}/${questions.length}`);
}


// start the game
startGame();