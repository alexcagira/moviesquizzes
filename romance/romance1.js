var position = 0,
  quiz, quiz_status, question, audio, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  { //Question 1
  a: "The Curious Case of Benjamin Button",
  b: "Call Me By Your Name",
  c: "Breakfast at Tiffany's",
  d: "50 First Dates",
  answer: "c",
  img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/romance/breakfastr.png?raw=true"
  },

  { //Question 2
    a: "(500) Days of Summer",
    b: "Love Actually",
    c: "P.S. I Love You",
    d: "Amélie",
    answer: "d",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/romance/amelie.png?raw=true"
  },

  { //Question 3
    a: "Batman Returns",
    b: "Romeo + Juliet",
    c: "After",
    d: "A Star Is Born",
    answer: "a",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/romance/batmanreturns.png?raw=true"
  },

  { //Question 4
    question: "<h2>'I'm also just a girl, in front of a boy, asking him to love her'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/arwen.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/annascott.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/victorfrankestein.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/ripley.png?raw=true",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/romance/annascott.mp3?raw=true"

  },

  { //Question 5
    question: "<h2>'You have bewitched me, body and soul, and I love... I love... I love you'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/joelbaris.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/darcyfitzwilliam.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/inigo.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/christopherrobin.png?raw=true",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/romance/darcyfitzwilliam.mp3?raw=true"

  },

  { //Question 6
    question: "<h2>'Sometimes I miss you so much I can hardly stand it'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/jacktwist.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/darcyfitzwilliam.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/victorfrankestein.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/roybatty.png?raw=true",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/romance/jacktwist.mp3?raw=true"

  },

  { //Question 7
    a: "My Heart Will Go On - Titanic",
    b: "I Say A Little Prayer - My Best Friend's Wedding",
    c: "Can't Take My Eyes Off Of You - 10 Things I Hate About You",
    d: "I Will Always Love You - The Bodyguard",
    answer: "d",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/romance/bodyguard.ogg?raw=true"

  },

  { //Question 8
    a: "Unchained Melody - Ghost",
    b: "The Time Of My Life - Dirty Dancing",
    c: "The Winner Takes It All - Mamma Mia!",
    d: "A Thousand Years - Breaking Dawn: Part 1",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/romance/ghost.m4a?raw=true"

  },

  { //Question 9
    a: "Pretty Woman",
    b: "The Secret in Their Eyes",
    c: "The Notebook",
    d: "West Side Story",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/romance/love.m4a?raw=true"

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

    if(correct == 0){
      quiz.innerHTML += "<h2> YOU HAVE NO CINEMATIC CULTURE </h2>";
    } //if ZERO questions are correct
  
    if(correct >= 1 && correct <= 5){
      quiz.innerHTML += "<h2> YOU ARE AN CASUAL VIEWER </h2>";
    } //if ONE question is correct

    if(correct > 5 && correct <= 8){
      quiz.innerHTML += "<h2> YOU ARE AN AVERAGE VIEWER </h2>";
    } //if TWO questions are correct

    if(correct == 9){
      quiz.innerHTML += "<h2> YOU ARE A CINEMA LOVER </h2>";
    } //if THREE questions are correct

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
