// start/reset button will run a function to start the game
// function will start a timer that counts from 5, and text saying 'get ready'
// timer from start button will run a function at 0, and display the first question

// create an object? yeah, object with the property being the question
// and the values being the answers

// I WANT TO DISPLAY EACH QUESTION, AND THEN OVERWRITE THE TEXT WITH A TIMER.
// THAT WILL BE THE EASIEST WAY TO CHANGE THE QUESTION EACH TIME
// "select#foo option:checked"

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
        startData: [
            "The question will go Here",
            "Answer1",
            "Answer2",
            "Answer3",
            "Answer4"
        ]
    };
    var Counter = 5;
    var intervalId;
    var timerOn = false;
// before game starts... information?
    $(".actualTimer").text(Counter);

// questions block
    function setQuestion1() {
        // clearing out the 'start timer' so it won't keep going
        // past 0;
        clearInterval(intervalId);
        // printing the information from data to the page
        $(".question").text(data.question1[0]);
        $(".q1").text(data.question1[1]);
        $(".q2").text(data.question1[2]);
        $(".q3").text(data.question1[3]);
        $(".q4").text(data.question1[4]);
        // start the timer to answer the questions
        Counter = 10;
        questionTimer();
    };
    function setQuestion2() {
        $(".question").text(data.question2[0]);
        $(".q1").text(data.question2[1]);
        $(".q2").text(data.question2[2]);
        $(".q3").text(data.question2[3]);
        $(".q4").text(data.question2[4]);
        Counter = 10;
        questionTimer();
    };
    function setQuestion3() {
        $(".question").text(data.question3[0]);
        $(".q1").text(data.question3[1]);
        $(".q2").text(data.question3[2]);
        $(".q3").text(data.question3[3]);
        $(".q4").text(data.question3[4]);
        Counter = 10;
        questionTimer();
    };
    function setQuestion4() {
        $(".question").text(data.question4[0]);
        $(".q1").text(data.question4[1]);
        $(".q2").text(data.question4[2]);
        $(".q3").text(data.question4[3]);
        $(".q4").text(data.question4[4]);
        Counter = 10;
        questionTimer();
    };
    function resetPage() {
        Counter = 5;
        timerOn = false;
        clearInterval(intervalId);
        $(".actualTimer").text(Counter);
        $(".question").text(data.startData[0]);
        $(".q1").text(data.startData[1]);
        $(".q2").text(data.startData[2]);
        $(".q3").text(data.startData[3]);
        $(".q4").text(data.startData[4]);
    };
// timer to start the game
    function startTimer() {
        if (!timerOn) {
            // set timerCounter to run every 1 second
            intervalId = setInterval(timerCounter, 1000);
            setTimeout(function () {
                setQuestion1();
            }, 5000);
            timerOn = true;
        };
    };
    // this is to update the timer on the page
    function timerCounter() {
        Counter--;
        $(".actualTimer").text(Counter);
        // if (Counter === 0) {
        //     $(".actualTimer").text(10);
        // };
    };

// question timer
    function questionTimer() {
        intervalId = setInterval(timerCounter, 1000);
    }

// click events
    $("#startButton").on("click", startTimer);
    $("#resetButton").on("click", resetPage);


});