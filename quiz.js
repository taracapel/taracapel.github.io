const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
  {
    question: "Tara is currently completing a PhD in:",
    answers: {
      a: "Computer coding",
      b: "Human-computer interaction",
      c: "Interactive programming languages",
      d: "Low and high fidelity prototyping"
    },
    correctAnswer: "b"
  },
  {
    question: "Tara once co-write a paper on:",
    answers: {
      a: "Women in crisis situations",
      b: "Motivations of young adults to participate in physical activities",
      c: "Understanding bug tracking in global software development",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Tara's web design and development skills include:",
    answers: {
      a: "Contextual inquiry",
      b: "Participant observation",
      c: "User interface design",
      d: "Prototype sorting"
    },
    correctAnswer: "c"
  },
  {
    question: "Tara is super passionate about:",
    answers: {
      a: "People",
      b: "Innovation",
      c: "Human-centred design",
      d: "All of the above and more!"
    },
    correctAnswer: "d"
  }
];


function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    for(i=0; i<quizQuestions.length; i++){
		
      // first reset the list of answers
      answers = [];
  
      // for each available answer to this question...
      for(letter in quizQuestions[i].answers){
  
        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter]
          + '</label>'
        );
      }
  
      // add this question and its answers to the output
      output.push(
        '<div class="question">' + quizQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
	
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      // keep track of user's answers
      
      var numCorrect = 0;
      
      // for each question...
      for(i=0; i<quizQuestions.length; i++){
    
        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        // if answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;
          
          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }
  
      // show number of correct answers out of total
      
      if (numCorrect === 0) { 
      resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
    }
    if (numCorrect === 1) { 
        resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
      }
      if (numCorrect === 2) { 
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
      }
      if (numCorrect === 3) { 
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Tara pretty well!";
      }
      if (numCorrect === 4) { 
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Tara so well!";
      }
          
    }
  
   
  
    // Kick things off
    buildQuiz();
  
    // Event listeners
    submitButton.onclick = function() {
        showResults();
    }


