



$('#question').text("Best Chicago Bull Ever?");
$('#option').text("");
//hover div effect
$(document).ready(function() {
	$("#0").hover(function() {
		$(this).css("background-color", "red");
	}, function() {
		$(this).css("background-color", "");
	});
});
$(document).ready(function() {
	$("#1" || "#3").hover(function() {
		$(this).css("background-color", "red");
	}, function() {
		$(this).css("background-color", "");
	});
});
$(document).ready(function() {
	$("#2").hover(function() {
		$(this).css("background-color", "red");
	}, function() {
		$(this).css("background-color", "");
	});
});
$(document).ready(function() {
	$("#3").hover(function() {
		$(this).css("background-color", "red");
	}, function() {
		$(this).css("background-color", "");
	});
});
var number = 10;
var intervalId;
var questionBball = ["Michael Jordan", "Scottie Pippen", "Dennis Rodman", "Steve Kerr"];
displayOptions();

function displayOptions() {
	for (i = 0; i < 4; i++) {
		var ballers = $('<div>' + questionBball[i] + "</div>"); //new vairable that is a div using the array values to display on the page.  
		//all attributes being added to the new divs appended.  Need to assign class so we can call it later in an onclick function
		ballers.addClass("ballersClass");
		ballers.attr("src", questionBball[i]);
		ballers.attr("id", i);
		$("#option").append(ballers);
		console.log(ballers);
		// $("#option").append("<div>" + ": " + questionBball[i] +"</div>");
		// console.log("bball" + questionBball);
	}
	$(".ballersClass").click(function() {
		console.log("CLICKER", $(this)[0].id);
		//myDivObj = document.getElementById("0").src="Michael Jordan";
		var img = new Image();
		img.src = "assets/pics/michael.JPG"; //store variable in an image so I can append it later
		console.log(img);
		if ($(this)[0].id == 0){  //using this to check the ID, then I can build if statment around that ID
			$("#option").empty(); //empty div so to make room for the image
			$("#option").append(img);
			stop();
		}else{
			alert("Wrong!!!!!!");
		}
			
		// console.log(myDivObj);
		// if (myDivObj == "Michael Jordan") {
		// 	alert("got it");
		// }
	})
}

function run() {
	intervalId = setInterval(decrement, 1000);
	console.log("interID" + intervalId);
}

function decrement() {
	//  Decrease number by one.
	number--;
	//  Show the number in the #show-number tag.
	$("#show-number").html(number);
	if (number === 0) {
		stop();
		$("#option").text("LOSER");

	}
};

function stop() {
	//  Clears our intervalId
	//  We just pass the name of the interval
	//  to the clearInterval function.
	clearInterval(intervalId);
}
run();










// var wins = 0;
// var losses = 0;
// var guessRemain = 9;
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
// console.log(computerGuess);
// var guessedLetters = []; //allows multiple functions to use this variable (global)



// function reset(){
//     userGuess = [];
//     guessRemain = 9;
//     guessedLetters = [];  
//     computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
//     console.log("computersGuess" + computerGuess);
// };


// // This function is run whenever the user presses a key.
// document.onkeyup = function(event) {

// var inp = String.fromCharCode(event.keyCode);   
// console.log(inp); 
// var userGuess = event.key;  
// var aGuess = guessedLetters.indexOf(userGuess);
//     console.log("already guess" + aGuess);
//     console.log("user guess" + userGuess);  
//     console.log("guessed letter" + guessedLetters);

            
//             if (userGuess == computerGuess){
//                 wins++;
//                 reset();
//             };
            
//             if ((aGuess == "-1") && userGuess !== computerGuess && userGuess){
//                 guessRemain --;
//                 guessedLetters.push(userGuess);
                
//             };

//             // if (/[a-zA-Z]/.test(inp))
//             //     alert("input was a letter, number, hyphen, underscore or space");
            
//             if (guessRemain === 0){
//                     losses++;
//                     reset();                    
//             };  

           
            
//             var html =
//             "<p>Wins: " + wins + "</p>" +
//             "<p>Losses: " + losses + "</p>" +
//             "<p>Remaining Guesses: " + guessRemain + "</p>"+
//             "<p>User Guesses: " + guessedLetters  + "</p>";
            
  
//           // Set the inner HTML contents of the #game div to our html string
//           document.querySelector("#game").innerHTML = html;
        
//         //document.getElementById('game').innerHTML = register();
