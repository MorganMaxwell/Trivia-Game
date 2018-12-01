// start/reset button will run a function to start the game
// function will start a timer that counts from 5, and text saying 'get ready'
// timer from start button will run a function at 0, and display the first question

// create an object? yeah, object with the property being the question
// and the values being the answers

// I WANT TO DISPLAY EACH QUESTION, AND THEN OVERWRITE THE TEXT WITH A TIMER.
// THAT WILL BE THE EASIEST WAY TO CHANGE THE QUESTION EACH TIME
// "select#foo option:checked"

// I want to have a timerCounter that loops. so maybe the best idea is to make a 
//timerCounter that counts from 10 to 0, then updates a variable with a number 
// stored in it. so var questionCount starts at 1, then the timer runs through
// once, and it updates to 2. then make a long if else statement running a diff
// function for whatever the value of questionCount is.
// make an array with all the answers, and compare the user guess to
// it at each point. 


$(document).ready(function () {

    //variables block
    var data = {
        question1: [
            "question1",
            "test1",
            "test1",
            "test1",
            "test1"
        ],
        question2: [
            "question2",
            "test2",
            "test2",
            "test2",
            "test2"
        ],
        question3: [
            "question3",
            "test3",
            "test3",
            "test3",
            "test3"
        ],
        question4: [
            "question4",
            "test4",
            "test4",
            "test4",
            "test4"
        ],
        // startData: [
        //     "Get ready! You will have 10 seconds to answer each question",
        //     "Answer1",
        //     "Answer2",
        //     "Answer3",
        //     "Answer4"
        // ]
    };
    var timerCounter = 10;
    var intervalId;
    var timerOn = false;
    var userGuesses = [];
    var correctAnswers = [1, 3, 1, 4];
    var correctGuesses = 0;
    var wrongGuesses = 0


    // questionPicker block
    function setQuestion1() {
        // printing the information from data to the page
        $(".question").text(data.question1[0]);
        $(".q1").text(data.question1[1]);
        $(".q2").text(data.question1[2]);
        $(".q3").text(data.question1[3]);
        $(".q4").text(data.question1[4]);
    };
    function setQuestion2() {
        $(".question").text(data.question2[0]);
        $(".q1").text(data.question2[1]);
        $(".q2").text(data.question2[2]);
        $(".q3").text(data.question2[3]);
        $(".q4").text(data.question2[4]);
    };
    function setQuestion3() {
        $(".question").text(data.question3[0]);
        $(".q1").text(data.question3[1]);
        $(".q2").text(data.question3[2]);
        $(".q3").text(data.question3[3]);
        $(".q4").text(data.question3[4]);
    };
    function setQuestion4() {
        $(".question").text(data.question4[0]);
        $(".q1").text(data.question4[1]);
        $(".q2").text(data.question4[2]);
        $(".q3").text(data.question4[3]);
        $(".q4").text(data.question4[4]);
    };
    function resetPage() {
        timerCounter = 10;
        timerOn = false;
        clearInterval(intervalId);
        $(".actualTimer").text(timerCounter);
        $(".question").text(data.startData[0]);
        $(".q1").text(data.startData[1]);
        $(".q2").text(data.startData[2]);
        $(".q3").text(data.startData[3]);
        $(".q4").text(data.startData[4]);
    };
    // I'm hoping this will work and compare the user guesses to correct answers
    // but it will probably break if they click a radio button before the game starts

    function endGame() {
        for (var i = 0; i < userGuesses; i++) {
            var j = 0;
            if (userGuesses[i] == correctAnswers[j]) {
                correctGuesses++;
            }
            else if (userGuesses[i] != correctAnswers[j]) {
                wrongGuesses++;
            };
            j++;
        };
    };
    //start the game
    function startGame() {
        var questionCount = [setQuestion1(), setQuestion2(), setQuestion3(), setQuestion4()];
        // for each thing in questionCount, run a timer
        $.each(questionCount, gameTimer());
        endGame();
    }
    // this is to run the timer for 10 seconds each question, and to gather user
    // input at the end of those 10 seconds
    function gameTimer() {
        intervalId = setInterval(timerPrinter, 1000);
        setTimeout(function () {
            dataGrab();
        }, 10000);
    }
    // this is to actually print the timer numbers to the screen
    function timerPrinter() {
        $("#actualTimer").text(timerCounter);
        timerCounter--;
    };
    // this is to gather user data for each question
    function dataGrab() {
        console.log($('input[name=answers]:checked').val());
        userGuesses.push($('input[name=answers]:checked').val());
        console.log(userGuesses);
    }
    // click events
    $("#startButton").on("click", startGame);
    $("#resetButton").on("click", resetPage);


});