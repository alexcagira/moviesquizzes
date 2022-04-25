var position = 0,
  quiz, quiz_status, question, audio, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  { //Question 1
  a: "Aliens",
  b: "Event Horizon",
  c: "A.I. Artificial Intelligence",
  d: "2001 - A Space Odyssey",
  answer: "a",
  img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/scifi/aliens.png?raw=true"
  },

  { //Question 2
    a: "Alien 3",
    b: "Star Wars IV - A New Hope",
    c: "Arrival",
    d: "Dune",
    answer: "c",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/scifi/arrival.png?raw=true"
  },

  { //Question 3
    a: "The Cloverfield Paradox",
    b: "Star Trek - The Motion Picture",
    c: "Passengers",
    d: "Blade Runner",
    answer: "d",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/scifi/bladerunner.png?raw=true"
  },

  { //Question 4
    question: "<h2>'Love is the only that transcends time and space'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/ripley.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/brand.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/arwen.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/vasquez.png?raw=true",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/scifi/brand.mp3?raw=true"

  },

  { //Question 5
    question: "<h2>'I am your father'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/roybatty.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/dory.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/buzz.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/darthvader.png?raw=true",
    answer: "d",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/scifi/darthvader.mp3?raw=true"

  },

  { //Question 6
    question: "<h2>'Get away from her, you bitch'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/joelbaris.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/vasquez.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/ripley.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/darthvader.png?raw=true",
    answer: "c",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/horror/colesear.mp3?raw=true"

  },

  { //Question 7
    a: "Bishop's Countdown - Aliens",
    b: "Flying - E.T. The Extra-Terrestrial",
    c: "Main Theme - Titan A.E.",
    d: "Main Theme - Alien",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/scifi/alien.ogg?raw=true"

  },

  { //Question 8
    a: "I don't wanna miss a thing - Armageddon",
    b: "S.T.A.Y. - Interstellar",
    c: "Orbital - Event Horizon",
    d: "A Planet - Prometheus",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/scifi/armageddon.m4a?raw=true"

  },

  { //Question 9
    a: "Hope - Rogue One",
    b: "The Imperial March - Star Wars V",
    c: "Main Titles - Star Trek",
    d: "R. Strauss: Thus Spoke Zarathustra - 2001: A Space Odyssey",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/scifi/imperial.m4a?raw=true"

  }];


function get(x) {
  return document.getElementById(x);
}

function play() {
  audio = document.getElementById("audio");
  audio.play();
}

function renderQuestion() {
  quiz = get("quiz");
  if (position >= questions.length) {

    quiz.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";

   if(correct <= 1){
         quiz.innerHTML += "<h2> YOU HAVE NO CINEMATIC CULTURE </h2>";
       } //if ZERO or ONE questions are correct

       if(correct > 1 && correct <= 5){
         quiz.innerHTML += "<h2> YOU ARE AN CASUAL VIEWER </h2>";
       } //if more than ONE question are correct

       if(correct > 5 && correct <= 8){
         quiz.innerHTML += "<h2> YOU ARE AN AVERAGE VIEWER </h2>";
       } //if FIVE to EIGHT questions are correct

       if(correct == 9){
         quiz.innerHTML += "<h2> YOU ARE A CINEMA LOVER </h2>";
       } //if ALL questions are correct

    get("quiz_status").innerHTML = "Quiz completed";
    //reset everything for the next quiz
    position = 0;
    correct = 0;

    quiz.innerHTML += "<button onclick='goHome()'>BACK HOME</button>";

    return false;
  }
  get("quiz_status").innerHTML = "Question " + (position + 1) + " of " + questions.length;

  question = questions[position].question;
  chA = questions[position].a;
  chB = questions[position].b;
  chC = questions[position].c;
  chD = questions[position].d;
  //Add local var to hold url
  img = questions[position].img;
  audio = questions[position].audio;

  quiz.innerHTML = "<h3></h3>";

  if(position <=2 ){
    quiz.innerHTML += "<h1>GUESS THE FRAME</h1>";
  //Add <img> element to DOM with source
    quiz.innerHTML += "<img class='pretty-image' src=\"" + img + "\"><br>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='a'> " + chA + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='b'> " + chB + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='c'> " + chC + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='d'> " + chD + "</label><br>";
  } 
  
  if(position >= 3 && position <= 5){
    quiz.innerHTML += "<h1>GUESS WHO SAID THE QUOTE</h1>";
    quiz.innerHTML += "<label><audio controls><source src=" + audio + " type='audio/mpeg'></audio></label>";
    quiz.innerHTML += "<h3>" + question + "</h3>"
    quiz.innerHTML += "<label><input type='radio' name='choices' value='a'><img class='icons' src=" + chA + "></label>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img class='icons' src=" + chB + "></label>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img class='icons' src=" + chC + "></label>";
    quiz.innerHTML += "<label><input type='radio' name='choices' value='b'><img class='icons' src=" + chD + "></label><br>";
  }

  if(position >= 6){
    quiz.innerHTML += "<h1>GUESS THE SOUNDTRACK</h1>";
    quiz.innerHTML += "<label><audio controls><source src=" + audio + " type='audio/mpeg'></audio></label></br>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='a'> " + chA + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='b'> " + chB + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='c'> " + chC + "</label>";
    quiz.innerHTML += "<label> <input type='radio' class='pretty-choice' name='choices' value='d'> " + chD + "</label><br>";
  }
  quiz.innerHTML += "<button onclick='showPrevious()'>&#8678 Question</button>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  quiz.innerHTML += "<button onclick='showNext()'>Question &#8680</button>";
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }

  if (choice == questions[position].answer) {
    correct++;
  }

  position++;

  renderQuestion();
}

//Show next question
function showNext() {
  position++;
  renderQuestion();
}
//Show previous question
function showPrevious() {
  position--;
  renderQuestion();
}

//Go back to the main page
function goHome(){
  document.location.href="https://alexcagira.github.io/moviesquizzes/";
}

window.addEventListener("load", renderQuestion);
