psuedocode 
START PROGRAM

DISPLAY "Welcome to the Trivia Quiz Game!"

CREATE an array called questions
    EACH question is an object with:
        questionText
        choices
        correctAnswer

SET score = 0
SET currentQuestionIndex = 0
SET totalTime = desired total game time
SET gameOver = false

FUNCTION startGame()
    DISPLAY "Press Enter to start the quiz"
    WAIT for user input
    DISPLAY "The game is starting..."
    CALL startTimer()
    CALL askQuestions()

FUNCTION startTimer()
    START a countdown timer for the whole game
    EVERY second:
        DECREASE totalTime by 1
        DISPLAY remaining time
        IF totalTime <= 0 THEN
            SET gameOver = true
            DISPLAY "Time is up!"
            CALL endGame()

FUNCTION askQuestions()
    WHILE currentQuestionIndex is less than length of questions
          AND gameOver is false

        GET current question from questions array using currentQuestionIndex

        DISPLAY question number
        DISPLAY current question text
        DISPLAY all answer choices

        PROMPT user to enter an answer

        CALL checkAnswer(userAnswer, current question)

        INCREASE currentQuestionIndex by 1

    IF gameOver is false THEN
        CALL endGame()

FUNCTION checkAnswer(userAnswer, question)
    IF userAnswer matches question.correctAnswer THEN
        DISPLAY "Correct!"
        INCREASE score by 1
    ELSE
        DISPLAY "Incorrect."
        DISPLAY "The correct answer was: " + question.correctAnswer

FUNCTION endGame()
    SET gameOver = true
    STOP timer

    DISPLAY "Game Over!"
    DISPLAY "Your final score is: " + score + "/" + total number of questions

    CALCULATE percentage score using:
        percentage = (score / total number of questions) * 100

    DISPLAY "Your score percentage is: " + percentage + "%"

    IF percentage is 80 or greater THEN
        DISPLAY "Great job!"
    ELSE IF percentage is 50 or greater THEN
        DISPLAY "Nice try!"
    ELSE
        DISPLAY "Keep practicing!"

    CALL showMissedQuestions()

FUNCTION showMissedQuestions()
    USE an array iteration method such as filter()
    CREATE missedQuestions array containing all questions answered incorrectly

    IF missedQuestions is not empty THEN
        DISPLAY "Questions you missed:"
        FOR EACH missed question in missedQuestions
            DISPLAY missed question text
            DISPLAY correct answer
    ELSE
        DISPLAY "You got every question correct!"

CALL startGame()

END PROGRAM