// function to calculate the result of the quiz
function calculateAnswers() {
    
    // initialize variables for each choice's score
    
    let quizScore1 = 0;
    let quizScore2 = 0;
    let quizScore3 = 0;
    let quizScore4 = 0;
    
    // get a list of the radio inputs on the page
    let choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value === 'c1') {
          quizScore1 += 1;
        }
        if (choices[i].value === 'c2') {
            quizScore2 += 1;
        }
        if (choices[i].value === 'c3') {
            quizScore3 += 1;
        }
        if (choices[i].value === 'c4') {
            quizScore4 += 1;
        }
        // If you add more choices and outcomes, you must add another if statement below.
      }
    }
    
  
    // Find out which choice got the highest score.
    let maxScore = Math.max(quizScore1, quizScore2, quizScore3, quizScore4);
    
  
    // Display answer corresponding to that choice
    let answerBox = document.getElementById('answer');
    if (quizScore1 === maxScore) { // If user chooses the first choice the most, this outcome will be displayed.
      answerBox.innerHTML = "You're a Creative: Creatives are best suited to those jobs focused on producing big ideas and new things. You enjoy the process of making and seeing the results of your work once it's done. You value people who do things their own way and out-of-the-box thinking. You are likely to be suited to jobs in areas such as marketing and media, advertising, design and the creative arts.";
    }
    if (quizScore2 === maxScore) { // If user chooses the second choice the most, this outcome will be displayed.
      answerBox.innerHTML = "You're a Carer: Carers are best suited to those jobs focused on the needs of others. You're a people person by nature, and you're interested in those around you. This makes you a good listener, advisor and trusted confidant for the people in your life. You're motivated by supporting others and by a strong sense of community service. You are likely to be suited to jobs in areas such as legal services, education and coaching, and health services.";
    }
    if (quizScore3 === maxScore) { // If user chooses the third choice the most, this outcome will be displayed.
      answerBox.innerHTML = "You're a Coach: Coaches are best suited to those jobs focused on promoting a healthy lifestyle, exercise and nutrition. You're an energetic person who enjoys time outdoors and working with other people. You're strongly motivated to help other improve their lives and their health, and you also ensure you practice what you preach. You are likely to be suited to jobs in areas such as education and training, sport and human movement, and health services.";
    }
    if (quizScore4 === maxScore) { // If user chooses the fourth choice the most, this outcome will be displayed.
      answerBox.innerHTML = "You're an Innovator: Innovators are best suited to those jobs focused on technical or scientific skills that produce practical outcomes. You're a logical and analytical person, and apply common sense to design practical solutions to problems. You prefer to make your decisions based on data and enjoy understanding how things work and why. You are likely to be suited to jobs in areas such as science and research, computing, engineering, technology and design.";
    }
  }
  

