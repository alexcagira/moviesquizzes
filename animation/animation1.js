var position = 0,
  quiz, quiz_status, question, audio, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  { //Question 1
  a: "The Secret of NIMH",
  b: "Fantasia",
  c: "Princess Mononoke",
  d: "Anastasia",
  answer: "d",
  img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/animation/anastasia.png?raw=true"
  },

  { //Question 2
    a: "Grave of the Fireflies",
    b: "Howl's Moving Castle",
    c: "Spirited Away",
    d: "The Little Mermaid",
    answer: "c",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/animation/chihiro.png?raw=true"
  },

  { //Question 3
    a: "The End of Evangelion",
    b: "your name",
    c: "Akira",
    d: "Kiki's Delivery Service",
    answer: "a",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/animation/evangelion.png?raw=true"
  },

  { //Question 4
    question: "<h2>'Not everyone can be an artist, but an artist can come from anywhere'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/zeniba.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/antonego.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/dory.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/buzz.png?raw=true",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/animation/antonego.mp3?raw=true"

  },

  { //Question 5
    question: "<h2>'To Infinity... And beyond!'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/buzz.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/laverne.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/dory.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/darthvader.png?raw=true",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/animation/buzz.mp3?raw=true"

  },

  { //Question 6
    question: "<h2>'Just keep swimming, just keep swimming...'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/dory.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/antonego.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/laverne.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/zeniba.png?raw=true",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/animation/dory.mp3?raw=true"

  },

  { //Question 7
    a: "Daylight - Toy Story 3",
    b: "Main Titles - The Little Mermaid",
    c: "The Burning Bush - The Prince of Egipt",
    d: "This Land - The Lion King",
    answer: "c",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/animation/bush.ogg?raw=true"

  },

  { //Question 8
    a: "So much more than a dream - Cinderella 3",
    b: "Far Longer than Forever - The Swan Princess",
    c: "Part of your world - The Little Mermaid",
    d: "Go the Distance - Hercules",
    answer: "d",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/animation/distance.ogg?raw=true"

  },

  { //Question 9
    a: "Be our guest - Beauty and the Beast",
    b: "Le Festin - Ratatouille",
    c: "I Need Some Sleep - Shrek 2",
    d: "Learn To Do It - Anastasia",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/animation/festin.ogg?raw=true"

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
    quiz.innerHTML += "<h3>" + question + "</h3>";
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
