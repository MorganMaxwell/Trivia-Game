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

$(document).ready(function () {

    var data = {
        question1: [
            "question",
            "test1",
            "test2",
            "test3",
            "test4"
        ],
        question2: [
            "question",
            "test",
            "test",
            "test",
            "test"
        ],
        question3: [
            "question",
            "test",
            "test",
            "test",
            "test"
        ],
        question4: [
            "question",
            "test",
            "test",
            "test",
            "test"
        ]
    };
    var numGen = Math.floor((Math.random() * 4) + 1)

    function question1() {
        $('#demo').html("test");
        console.log("test");
    }

    function question2() {
        var question2 = data.question2;
    }

    function question3() {
        var question3 = data.question3;
    }

    function question4() {
        var question4 = data.question4;
    }

    question1();


});