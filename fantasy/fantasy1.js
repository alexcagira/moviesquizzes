var position = 0,
  quiz, quiz_status, question, audio, choice, choices, chA, chB, chC, chD, correct = 0;

var questions = [
  { //Question 1
  a: "Legend",
  b: "Willow",
  c: "Harry Potter and the Prisoner of Azkaban",
  d: "The Lord of the Rings: The Return of the King",
  answer: "c",
  img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/fantasy/harrypotter.png?raw=true"
  },

  { //Question 2
    a: "The Princess Bride",
    b: "Dungeons and Dragons",
    c: "The Black Cauldron",
    d: "The Lord of the Rings: The Fellowship of Ring",
    answer: "d",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/fantasy/lordoftherings.png?raw=true"
  },

  { //Question 3
    a: "Dragonheart",
    b: "The Neverending Story",
    c: "King Arthur: Legend of the Sword",
    d: "A Knight's Tale",
    answer: "b",
    img: "https://github.com/alexcagira/moviesquizzes/blob/master/frames/fantasy/neverending.png?raw=true"
  },

  { //Question 4
    question: "<h2>'If you want him. Come and claim him'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/arwen.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/brand.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/galadriel.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/glinda.png?raw=true",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/fantasy/arwen.mp3?raw=true"

  },

  { //Question 5
    question: "<h2>'Happiness can be found even in the darkest of times, if one only remembers to turn on the light'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/inigo.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/rosetitanic.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/dumbledore.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/gandalf.png?raw=true",
    answer: "c",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/fantasy/dumbledore.mp3?raw=true"

  },

  { //Question 6
    question: "<h2>'Even the smallest person can change the course of the future'</h2>",
    a: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/galadriel.png?raw=true",
    b: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/annascott.png?raw=true",
    c: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/laverne.png?raw=true",
    d: "https://github.com/alexcagira/moviesquizzes/blob/master/icons/glinda.png?raw=true",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/audio-quotes/fantasy/galadriel.mp3?raw=true"

  },

  { //Question 7
    a: "Prologue: One Ring to Rule Them All - The Lord of the Rings: The Fellowship of the Ring",
    b: "Echos - Made in Abyss",
    c: "Lumos! - Harry Potter and the Prisoner of Azkaban",
    d: "The Battle - The Chronicles of Narnia: The Lion, The Witch and the Wardrobe",
    answer: "d",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/fantasy/battle.m4a?raw=true"

  },

  { //Question 8
    a: "Aniron - The Lord of the Rings: The Fellowship of the Ring",
    b: "Main Titles - Legend",
    c: "Follow the Spiders - Harry Potter and the Chamber of Secrets",
    d: "The Legend of Ashitaka - Princess Mononoke",
    answer: "a",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/fantasy/aniron.ogg?raw=true"

  },

  { //Question 9
    a: "The Shire - The Lord of the Rings: The Fellowship of the Ring",
    b: "Heartbeat - Howl's Moving Castle",
    c: "Double Trouble - Harry Potter and the Prisoner of Azkaban",
    d: "Main Titles - The Neverending Story",
    answer: "b",
    audio: "https://github.com/alexcagira/moviesquizzes/blob/master/soundtracks/fantasy/heartbeat.ogg?raw=true"

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
  
    if(correct >= 1 && correct >! 5){
      quiz.innerHTML += "<h2> YOU ARE AN CASUAL VIEWER </h2>";
    } //if ONE question is correct

    if(correct > 5 && correct >! 8){
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
