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

// to print correct answers, empty the div at the end of the timer
// and reprint the answer with a 

// ^please ignore all of that, that's my horrible thought processes throughout the week


$(document).ready(function () {
    var text = '42px';
var integer = parseInt(text, 10);
console.log(integer);

    //variables block
    var data = [
        [
            "What is Santa's 4th reindeer?",
            "Vixen",
            "Comet",
            "Rudolph",
            "Dasher"
        ],
        [
            "What was Rudolph's dad's name?",
            "Dancer",
            "Mitzi",
            "Blitzen",
            "John Deer"
        ],
        [
            "What color were Scott Farkus' eyes in 'A Christmas Story?'",
            "Yellow",
            "Green",
            "Blue",
            "Black"
        ],
        [
            "How long does it take to grow a Christmas tree?",
            "1-3 years",
            "3-5 years",
            "5-10 years",
            "10-20 years"
        ],
        [
            "When did flashing lights on Christmas debut?",
            "1850s",
            "1910s",
            "1930s",
            "1950s"
        ],
        [
            "What is the pop. of Santa Claus, Indiana?",
            "Under 1000",
            "Over 10,000",
            "5,000",
            "2,000"
        ],
        [
            "What is a reindeer's favorite food in the wild?",
            "Grass",
            "Lichen",
            "Pine cones",
            "Other reindeer",
        ],
        [
            "Can wild turkeys fly?",
            "Yes",
            "No",
            "Yes, for short distances",
            "Definitely not",
        ],
        [
            "When are 'The Twelve Days Of Christmas?'",
            "December 1-12",
            "December 14-25",
            "December 25-January 5",
            "July 4-16"
        ],
        [
            "How many spirits visit Scrooge in 'A Christmas Carol?'",
            "4",
            "3",
            "5",
            "2.5"
        ]];

    var startData = [
        "Get ready! You will have 10 seconds to answer each question",
        "Answer1",
        "Answer2",
        "Answer3",
        "Answer4"
    ];
    var timerCounter = 10;
    var intervalId;
    var timerOn = false;
    var correctAnswers = [1, 3, 1, 3, 3, 4, 2, 1, 3, 1];
    var questionCounter = 0;
    var showingAnswer = false;
            // I absolutely cannot figure out why this is giving NaN, and 
        // when I take off that :checked, it doesn't update the variable if
        // you change what button is clicked
    var userGuess = $(':radio[name=answers]:checked').val();
    // var UserGuess = parseInt(userGuess, 10);
    var answersRight = 0;
    var answersWrong = 0;

    function resetPage() {
        displayQuestion(startData);
        clearInterval(intervalId);
        timerCounter = 10;
        timerOn = false;
        $(".actualTimer").text(timerCounter);
        $(".answer").empty();
        $('.rightORWrong').empty();
    }

    function displayQuestion(questionData) {
        // printing the information from data to the page
        $(".question").text(questionData[0]);
        $(".q1").text(questionData[1]);
        $(".q2").text(questionData[2]);
        $(".q3").text(questionData[3]);
        $(".q4").text(questionData[4]);
    };

    $(".actualTimer").text(timerCounter);
    // I'm hoping this will work and compare the user guesses to correct answers
    function endGame() {
        clearInterval(intervalId);
        timerOn = false;
        $(".answer").text('game done');
        $(".rightORWrong").text("You got: " + answersRight + " Right " + "And: " + answersWrong + " Wrong!")
    }
    //start the game
    function startGame() {
        answersRight = 0;
        answersWrong = 0;
        questionCounter = 0;
        startNewQuestion();
        gameTimer();
    };
    // this is to set a function to run every second
    function gameTimer() {
        if (timerOn == false) {
            intervalId = setInterval(timer, 100);
            timerOn = true;
        };
    };
    // this is to check the point we're 'at' in the game, displaying answers, showing questions,
    // what question we're on, etc.
    function timer() {
        timerCounter--;
        if (timerCounter === 0) {
            if (showingAnswer) {
                if (questionCounter === data.length -1) {
                    endGame();
                }
                else {
                questionCounter++;
                startNewQuestion();
                };
            }
            else {
                showAnswer();
            };
        };
        $(".actualTimer").text(timerCounter);
    };
    // this is to gather user data for each question
    function dataGrab() {
        // I absolutely cannot figure out why this is giving NaN, and 
        // when I take off that :checked, it doesn't update the variable if
        // you change what button is clicked
        userGuess = $(':radio[name=answers]:checked').val();
    };
    function startNewQuestion() {
        showingAnswer = false;
        $(".answer").empty();
        $(".rightORWrong").empty();
        var questionWereOn = data[questionCounter];
        displayQuestion(questionWereOn);
        timerCounter = 10;
    };

    function showAnswer() {
        // this is a lot.
        // so answerindex is = to the list of rightanswers, at the point that questioncounter is at.
        // so question 1 is displayed, questionCounter = 1, so answerIndex is looking at 
        // correctAnswers array, at the point of questionCounter.
        var answerIndex = correctAnswers[questionCounter]
        // answerCheck = data, and we're using questionCounter to iterate through data.
        // and to make sure we see the correct answers, we're looking at the index of the right 
        // answer. this line was by far the hardest thing to wrap my head around, and I still
        // have a hard time with it.
        var answerCheck = data[questionCounter][answerIndex];
        //  this userCheck is compared to answerCheck, and if they're === then you display 'right'
        // and if they're not, display 'wrong'

        // var userCheck = data[questionCounter][userGuess];
        // $(".question-box").empty();
        dataGrab();
        console.log(answerIndex);
        console.log(userGuess);
        // I know it's bad practice to use 2 equals signs instead of 3, but it's the only
        // thing that's making this work. I'm begging for feedback on this, because
        // I spent 4 hours figuring out how to get this to tell me 1 == 1
        if (userGuess == answerIndex) {
            $(".rightORWrong").text("You guessed Right!");
            answersRight++;
            console.log("right: " + answersRight);
        }
        else if (userGuess !== answerIndex) {
            $(".rightORWrong").text("You guessed Wrong!");
            answersWrong++;
            console.log("wrong: " + answersWrong);
        };
        // gather user data before displaying answer, to make sure they can't switch
        timerCounter = 4;
        showingAnswer = true;
        $(".answer").text(answerCheck);
        // TODO check if their answer was correct, and print out either correct or incorrect
    };
    // click events
    $("#startButton").on("click", startGame);
    $("#resetButton").on("click", resetPage);
});