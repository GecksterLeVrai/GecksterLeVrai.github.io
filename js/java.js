class Question {
    constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(choice) {
      return this.answer === choice;
    }
  }
  let questions = [
    new Question("Qui est Alexis Bergeron ? ", ["Un gars sur tinder","Un modo discord", "Le main character", "Jacob"], "Le main character"),
    new Question("Combien de costume furry Alexis possède t'il ?", ["Aucun", "1", "6", "30 sec"], "1"),
    new Question("Quelle est la e-girl préférer d'Alexis Bergeron ?", ["Kirna","Soul", "Jr", "Madi"], "Kirna"),
    new Question("Combien de temps par semaine Alexis passe t'il sur Discord à des fins productives ?", ["6h","15 min", "-2h", "18h"], "-2h"),
    new Question("Est-ce que ce Quizz à été fait avec le consentement d'Alexis Bergeron?", ["Oui","", "", ""], "Oui"),
    new Question("Qui a voler le coeur de la e-girl à Alexis ? ", ["Jacob","Jr", "Lucas", "Toutes ces réponses"], "Toutes ces réponses"),
    new Question("Quel est le rank de Alexis sur Valorant", ["Immortel III","Poubelle II", "Gay III", "Ne possède pas le niveau requis pour avoir un rank"], "Ne possède pas le niveau requis pour avoir un rank"),
    new Question("Quelle est l'endroit préféré d'Alexis pour un date ? ", ["Bind site A","Roblox", "Frank Tea", "Dans sa cave"], "Frank Tea"),
    new Question("Que doit faire Alexis pour rattraper son retard durant son année ? ", ["Jouer à roblox pendant le cours","Modérer ses serveurs discord au lieu de travailler", "Insulter Niko durant le cours", "Se concentrer sur ses devoirs en levant la main lorsqu'il ne comprends pas"], "Se concentrer sur ses devoirs en levant la main lorsqu'il ne comprends pas"),
    new Question("Ce que Alexis a retenu de son histoire avec Kirna ? ", ["Rien","Se focuser sur lui même afin de pouvoir régler ses défauts et mener une meilleur vie", "Devenir comme Lucas", "Est-ce que vous avez d'autres e-girls?"], "Est-ce que vous avez d'autres e-girls?")
  ];
  
  class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.currentQuestionIndex = 0;
    }
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
    guess(answer) {
      if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
    hasEnded() {
      return this.currentQuestionIndex >= this.questions.length;
    }
  //Permet de recommencer le Quizz
    reset(){
        this.score = 0;
        this.currentQuestionIndex = 0;
    }
  }
  
  const display
   = {
    elementShown: function(id, text) {
      let element = document.getElementById(id);
      element.innerHTML = text;
    },
    //Ajoute bouton pour recommencer le Quizz 
    endQuiz: function() {
      endQuizHTML = `
        <h1>Quiz terminé !</h1>
        <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>
        <button id="boutonRecommencer" onclick="restartQuiz()">Recommencer</button>`;
      this.elementShown("quiz", endQuizHTML);
    },
    question: function() {
      this.elementShown("question", quiz.getCurrentQuestion().text);
    },
    choices: function() {
      let choices = quiz.getCurrentQuestion().choices;
  
      guessHandler = (id, guess) => {
        document.getElementById(id).onclick = function() {
          quiz.guess(guess);
          quizApp();
        }
      }
      // affichage choix + prise en compte du choix
      for(let i = 0; i < choices.length; i++) {
        this.elementShown("choice" + i, choices[i]);
        guessHandler("guess" + i, choices[i]);
      }
    },
    progress: function() {
      let currentQuestionNumber = quiz.currentQuestionIndex + 1;
      this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    },
  };
  
  // Game logic
  quizApp = () => {
    if (quiz.hasEnded()) {
      display.endQuiz();
    } else {
      display.question();
      display.choices();
      display.progress();
    } 
  }
  // Create Quiz
  let quiz = new Quiz(questions);
  quizApp();
  //Utilise la fonction pour remettre le Quizz à 0
  //Remplace le HTML de la fin du Quizz par celui du début
  //Relance le Quizz
  function restartQuiz() {
    quiz.reset();
    document.getElementById("quiz").innerHTML = `
      <h2 id="question"></h2>
      <div class="choices">
        <button id="guess0" class="btn"><p id="choice0"></p></button>
        <button id="guess1" class="btn"><p id="choice1"></p></button>
        <button id="guess2" class="btn"><p id="choice2"></p></button>
        <button id="guess3" class="btn"><p id="choice3"></p></button>
      </div>
      <p id="progress"></p>`;
    quizApp();
  }
//Variables
const dialogue = document.getElementById("dialogue");
const closeButton = document.getElementById("fermer");
const fermerToujours = document.getElementById("fermerToujours");
let memoireFermer = localStorage.getItem("fermer");

  
  
//Lorsque on clique sur le bouton ça commence la fonction fermer
closeButton.addEventListener("click", fermer);

//ferme la boite de dialogue
function fermer() {
  dialogue.close();
}
//Lorsque on clique sur le bouton ça commence la fonction fermerToujours
fermerToujours.addEventListener("click", fermerToujoursFunc);
//Ferme la boite de dialogue et met en local storage le montant de memoireFermer
function fermerToujoursFunc() {
  dialogue.close();
  memoireFermer++; 
  localStorage.setItem("fermer", memoireFermer);
}
//Convertit en nombre l'information transmisse afin de
//faire fonctionner la prochaine boucle
if (memoireFermer) {
  testf = parseInt(memoireFermer);
} 
else {
  memoireFermer = 0;
}
  //si le montant est supérieur à 1 n'affiche plus la boite de dialogue
if (memoireFermer < 1) {
  dialogue.showModal();
}
else {
  dialogue.close(); 
}
  
