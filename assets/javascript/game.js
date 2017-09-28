
var option = $("#question");

var questions = [
    {question: "Best Chicago Bull Ever?",
     answer: ["Michael Jordan","Steve Kerr", "Scottie Pippen", "Dennis Rodman"],    
     correctAnswer: "Michael Jordan"
    },
    {question: "Year of First 3peat?",
    answer: ["1990-1992","1991-1993", "1992-1994", "1993-1995"],    
    correctAnswer: "1991-1993",
    },
    {question: "MJ Retired for what Sport?",
    answer: ["football","soccer", "baseball", "ping-pong"],    
    correctAnswer: "baseball",
    },
    {question: "Bulls Mascot Name?",
    answer: ["Billy","Bobby", "Bo", "Benny"],    
    correctAnswer: "Benny",
    }
];


var timer;
var game = {  //function for the game, going to set keys within the function
    correct: 0,
    incorrect: 0,
    counter: 20,
        
    //create a function within the game object to grab and populate all the information from my questions object above
    start: function(){
       timer = setInterval(game.countdown, 1000); 
       console.log(timer);
        for(i=0; i<questions.length; i++){  //loop through var opbject questions
            option.append("<h2>"+ questions[i].question + "</h2>");  //append h2 tag and 'question' when it appears
            for(j=0; j<questions[i].answer.length; j++){ //looop through answers in question object
              option.append("<input type='radio' name=question-" + i +  
              "' value='" + questions[i].answer[j] + "''>" + questions[i].answer[j]); //append radio button and possible answers to div
            }
                 
        }
        
    },
    //create a function within the game object to countdown the timer
    countdown: function(){
        console.log(game.countdown);
        game.counter --;
        $("#show-number").html(game.counter);
        if(game.counter === 0){
            game.done();    //run the done function when counter = 0, which should count up incorrect and correct answers (see below)
            game.result();
        }
     
    }, 
    //create a function within the game object to initialize the "grading" of the test once the countdown is finished, run this after countdown is 0
    done: function(){  //another key of the object game
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() === questions[0].correctAnswer) {
                console.log("first in done" + this);
              game.correct++; 
              console.log("correct" + game.correct);
            }
            else {
              game.incorrect++;
            }
          });
     console.log(this); 
     clearInterval(timer);  //clear the timer once it hits 0
     },
     result: function(){
        
        clearInterval(timer);
        
                
            option.html("<h2>All Done!</h2>");
            option.append("<h3>Correct Answers: " + this.correct + "</h3>");
            option.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
            option.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
            option.append("<br><br> <button id='reset'>Reset</button>");
        
          },

}
game.start();
game.countdown();

   
//game object
// option.append("<button id='done'>done</button>");
// option.append("<button id='start'>start</button>");

//game.done();
//console.log(done);


    



//click events for start and reset





// start: function() {
//    timer = setInterval(game.countdown, 1000);

//    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

//    $("#start").remove();

//    for (var i = 0; i < questions.length; i++) {
//      panel.append("<h2>" + questions[i].question + "</h2>");
//      for (var j = 0; j < questions[i].answers.length; j++) {
//        panel.append("<input type='radio' name='question-" + i +
//        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
//      }
//    }

//    panel.append("<br><br> <button id='done'>Done</button>");
//  },
