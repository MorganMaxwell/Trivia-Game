// start/reset button will run a function to start the game
// function will start a timer that counts from 5, and text saying 'get ready'
// timer from start button will run a function at 0, and display the first question

// create an object? yeah, object with the property being the question
// and the values being the answers

// I think the easiest way for random positions with answers is to 
// make a random num gen between 0 and 3, and each question position will be
// assigned a number from that to then take the answer and write it to the page

// I WANT TO DISPLAY EACH QUESTION, AND THEN OVERWRITE THE TEXT WITH A TIMER.
// THAT WILL BE THE EASIEST WAY TO CHANGE THE QUESTION EACH TIME
// "select#foo option:checked"

$(document).ready(function () {

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
        ]
    };
    var startCounter = 5;
    $(".actualTimer").text(startCounter);


    function setQuestion1() {
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

    function startTimer() {
        setInterval(timerCounter, 1000);
        setTimeout(function () {
            setQuestion1();
        }, 5000);
    };

    function timerCounter() {
        startCounter--;
        $(".actualTimer").text(startCounter);
    };

    $("#startButton").on("click", startTimer);


});