import { title, questions } from "../modules/kidney.js"

// console.table([questions])

// Quiz Title
console.log('Title:', title);
console.log('Questions:', questions);

// Subject
const subject = document.querySelector('.subject');

// Question(s)
const questionsDiv = document.getElementById('questions');
const questionText = document.getElementById('questionText');

// Choices 
const choices = document.getElementById('choices');

// Total questions
const totalQuestions = questions.length;

// First question index - Current question index
let questionIdx = 0;
let count;


// Random question
let randomNum = Math.floor(Math.random() * totalQuestions);
let randomQuestion = questions[questionIdx].question;


// Calculate Score
// (score/totalQuestions) *100;

// Buttons
const buttonsContainer = document.getElementById('buttonsContainer');
const prevBtn = document.getElementById('prevBtn');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');

// Score - Total Question(s)
const scoreContainer = document.getElementById('score');
let score = 0;

// True or False explanation 
const explanationDisplay = document.getElementById('explanation');


const load = () => {
  questionIdx = 0;

  Title();
  buttonsContainer.style.display = 'flex';
  scoreContainer.style.display = 'none';
  submitBtn.innerHTML = 'Start Quiz!';
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  
  console.log('Quiz Loading...')
}


const startQuiz = () => {
  questionIdx = 0;
  score = 0;
  
  scoreContainer.style.display = 'none';
  questionsDiv.style.display = 'block';
  prevBtn.style.display = 'block';
  nextBtn.style.display = 'block';
  
  
  Title();
  Question();

  console.log('Quiz has started')
}

// Quiz Title: WORKS
const Title = () => {
  subject.innerHTML = title;
}

// Reset Questions
const resetQuestionState = () => {
  submitBtn.style.display = 'none';
  prevBtn.style.display = 'none';
  buttonsContainer.style.display = 'none';

  while(choices.firstChild) {
    choices.removeChild(choices.firstChild)
  }

  if(questionIdx === totalQuestions - 1) {
    submitBtn.innerHTML = 'Submit';
    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
  }
}

// Question: WORKS
const Question = () => {
  // Reset questions state
  resetQuestionState();

  let currentQuestion = questions[questionIdx];
  let questionNum = questionIdx + 1;
  
  questionText.innerHTML = `${questionNum}. ${ currentQuestion.question}`;
  explanationDisplay.style.display = 'none';

  // Handle type of question
  handleAnswerType();
}

// Multiple Choice: WORKS
const handleMultipleChoice = () => {
  let currentQuestion = questions[questionIdx];
  let currentOptions = currentQuestion.options;
  let type = currentQuestion.type;

  // Check if Multiple Choice
  if (type === 'multiple-choice') {
    currentOptions.forEach(answer => {
      const choiceBtn = document.createElement("button");
      
      choiceBtn.innerHTML = answer.text;
      choiceBtn.classList.add('answerBtn');
      choices.appendChild(choiceBtn);

      if(answer.isCorrect){
        choiceBtn.dataset.isCorrect = answer.isCorrect;
      }

      // choiceBtn.addEventListener('click', selectedAnswer);
      choiceBtn.onclick = checkMultipleChoiceAnswer;
    })
  }
}
const checkMultipleChoiceAnswer = (e) => {
  let currentQuestion = questions[questionIdx];
  const selectedChoice = e.target;
  const isCorrect = selectedChoice.dataset.isCorrect === 'true';

  if (isCorrect) {
    selectedChoice.classList.add('correct');
    currentQuestion['score'] = 1;
    score++;
  } else {
    selectedChoice.classList.add('incorrect');
  }

  Array.from(choices.children).forEach(choiceBtn => {
    if (choiceBtn.dataset.isCorrect === 'true') {
      choiceBtn.classList.add('correct');
    }
    // Then disable button
    choiceBtn.disabled = true;
    
  });
  buttonsContainer.style.display = 'flex';
}

// True or False
const handleTrueFalse = () => {
  
  let currentQuestion = questions[questionIdx];
  let currentOptions = currentQuestion.options
  let type = currentQuestion.type;

  // Check if True / False
  if (type === 'true-false') {
    currentOptions.forEach(answer => {

      const trueOrFalseBtn = document.createElement('button');

      trueOrFalseBtn.innerHTML = answer.text;
      trueOrFalseBtn.classList.add('answerBtn');
      choices.appendChild(trueOrFalseBtn);

      if(answer.isCorrect){
        trueOrFalseBtn.dataset.isCorrect = answer.isCorrect;
      }

      // Listen for choice
      trueOrFalseBtn.onclick = checkTrueFalseAnswer;
    });
  }
}
const checkTrueFalseAnswer = (e) => {
  let currentQuestion = questions[questionIdx];
  let type = currentQuestion.type;
  const selectedChoice = e.target;
  const isCorrect = selectedChoice.dataset.isCorrect === 'true';
  const explanation = currentQuestion.explanation;

  explanationDisplay.innerHTML = `<em>Explanation:</em> <br> "${explanation}"`;
  // explanationDisplay.style.display = 'none';
  
  
  if (isCorrect) {
    selectedChoice.classList.add('correct');
    currentQuestion['score'] = 1;
    score++;
  } else {
    selectedChoice.classList.add('incorrect');
    explanationDisplay.style.display = 'block';
  }  

  Array.from(choices.children).forEach(trueFalseBtn => {
    
    if (trueFalseBtn.dataset.isCorrect === 'true') {
      trueFalseBtn.classList.add('correct');
    }
    // Then disable button
    trueFalseBtn.disabled = true;
    
  });
  buttonsContainer.style.display = 'flex';
}

// Fill In
const handleFillIn = () => {
  let currentQuestion = questions[questionIdx];
  let currentOptions = currentQuestion.options;
  let type = currentQuestion.type;

  if (type === 'fill-in') {
    const fillInDiv = document.createElement('div');
    const fillInList = document.createElement('ol');
    const fillInInput = document.createElement('input');
    const fillInLabel = document.createElement('label');
    const saveBtn = document.createElement('button');

    
    fillInDiv.setAttribute('id', 'fillInDiv');
    fillInDiv.appendChild(fillInLabel);
    fillInDiv.appendChild(saveBtn);

    fillInList.setAttribute('id', 'fillInList');
    
    choices.appendChild(fillInList);

    fillInLabel.setAttribute('for', 'fillIn');
    fillInLabel.append(fillInInput);
    
    fillInInput.setAttribute('type', 'text');
    fillInInput.setAttribute('placeholder', 'Enter answer here...');
    fillInInput.setAttribute('id', 'fillIn');
    fillInInput.setAttribute('name', 'fillInAnswer');
    fillInInput.classList.add('fillInText');
    
    saveBtn.setAttribute('id', 'fillInSave');
    saveBtn.setAttribute('type', 'submit');
    saveBtn.classList.add('unsaved');
    saveBtn.innerHTML = 'Save';
    
    const fillInItem = document.createElement('li');

    currentOptions.forEach(answer => {
      fillInItem.classList.add('listItem');
      fillInItem.innerHTML = '';
      fillInList.style.paddingLeft = '20px';
      fillInList.appendChild(fillInItem);
    });

    choices.append(fillInDiv);

    // Check Input/Answer
    saveBtn.onclick = checkFillInAnswer;
  }
}
const checkFillInAnswer = (e) => {
  const outputList = document.getElementById('fillInList');
  const fillInItem = document.querySelector('li');
  const answerOutput = document.createElement('button');
  const currentInput = document.getElementById('fillIn');

  let currentAnswer = currentInput.value;
  let currentQuestion = questions[questionIdx];
  let currentOptions = currentQuestion.options;
  
  const saveBtn = e.target;
  
  fillInItem.append(currentAnswer);
  answerOutput.classList.add('answerBtn');
  answerOutput.innerHTML = `>>> ${currentAnswer}`;
  choices.appendChild(answerOutput);
  
  currentOptions.forEach(answer => {
    const correctOutput = document.createElement('button');
    let correctAnswer = answer.text;
    let isCorrect = currentAnswer.toLowerCase() === answer.text.toLowerCase() && answer.isCorrect === true;
    
    if (isCorrect) {
      correctAnswer = `>>> ${answer.text}`;
      answerOutput.style.display = 'none';
      score++;
    } 
    
    correctOutput.classList.add('answerBtn');
    correctOutput.classList.add('correct');
    answerOutput.classList.add('incorrect');
    choices.appendChild(correctOutput);   
    correctOutput.innerHTML = correctAnswer;      
  });

  // Clear input
  currentInput.value = '';
  currentInput.disabled = true;
  saveBtn.innerHTML = 'Saved';
  saveBtn.classList.remove('unsaved');
  saveBtn.classList.add('saved');

  // Disable save button
  saveBtn.disabled = true;

  buttonsContainer.style.display = 'flex';
}

// Handle Answer Type
const handleAnswerType = () => {
  let currentQuestion = questions[questionIdx];
  let type = currentQuestion.type;

  switch (type) {
    case 'multiple-choice':
      handleMultipleChoice();
      break;
    case 'true-false':
      handleTrueFalse();
      break;
    case 'fill-in':
      handleFillIn();
      break;
    default:
      break;
  }
}

// Scoring
const Score = () => {
  // Reset Questions
  resetQuestionState();
  
  // TotalScore
  let total = Math.floor((score / totalQuestions) * 100);
  let passed = total > 80;

  // Score Text
  const scoreText = document.createElement('p');
  scoreText.setAttribute('class', 'scoreText');
  scoreText.innerHTML = 'Score';

  // User score
  const userScore = document.createElement('span');
  userScore.setAttribute('id', 'userScore');
  userScore.innerHTML = score;

  // Slash
  const slash = document.createElement('span');
  slash.innerHTML = '/';

  // Total score
  const totalScore = document.createElement('totalScore');
  totalScore.setAttribute('id', 'totalScore');
  totalScore.innerHTML = `= ${total}%`;

  // Total questions container
  const totalQuestionsCount = document.createElement('span');
  totalQuestionsCount.setAttribute('id', 'totalQuestions')
  totalQuestionsCount.innerHTML = totalQuestions;


  let message;
  
  // Total question count

  // questions.forEach(question => {
  //   if(question.score === 1) {
  //     console.log(`Question scored ${question.score} point`)
  //   } else {
  //     console.log('No score recorded yet.')
  //   }
  // });
  
  if (passed) {
    totalScore.setAttribute('class', 'passed');
  } else {
    totalScore.classList.add('failed');
  }
  
  
  if(total === 100) {
    // Message
    message = `Congratulations! You scored ${total}%`;
  } else if (total > 90) {
    // Message
    message = `Congratulations on passing! You scored ${score} out of ${totalQuestions} = ${total}`;
  } else if (total >= 75) {
    // Message
    message = `Congratulations on passing! You scored ${score} out of ${totalQuestions} = ${total}. "Let's try again"`;
  } else {
    // Message
    message = `Sorry you did not score high enough, Let's try again!`;
  }
  

  // Scoring
  scoreContainer.append(scoreText);
  scoreContainer.append(userScore);
  scoreContainer.append(slash);
  scoreContainer.append(totalQuestionsCount);
  scoreContainer.append(totalScore);
  scoreContainer.style.display = 'block';

  // Message
  subject.innerHTML = `${message}`;
  buttonsContainer.style.display = 'flex';
}

// Next Question: WORKS
const nextQ = () => {
  questionIdx++;
  randomNum++;
  
  if (questionIdx < totalQuestions) {
    //   let previousQuestion = questions[questionIdx];
    //   console.log('question:', randomNum)
    Question();

    //   console.log('previousQ:', previousQuestion);
    //   let currentQuestion = questions[questionIdx];
    //   let nextQuestion = questions[questionIdx + 1];

    //   console.log('currentQ:', currentQuestion);
    //   console.log('nextQ:', nextQuestion);

  } else {
    // alert(`This was the last question. Please submit quiz for scoring.`);
  }

  // explanationDisplay.style.display = 'none';
  // console.log('Clicked Next Button');
}

// Prev Question: WORKS
const prevQ = () => {
  questionIdx--;
  randomNum--;
  
  if (questionIdx >= 0) {
    //   let previousQuestion = questions[questionIdx];
    //   console.log('question:', randomNum);
    Question();

    //   console.log('previousQ:', previousQuestion);
    //   let currentQuestion = questions[questionIdx];
    //   let nextQuestion = questions[questionIdx - 1];
  
    //   console.log('currentQ:', currentQuestion);
    //   console.log('nextQ:', nextQuestion);
    
  } else {
    alert(`This is the first question. Please continue.`);
  }

  // console.log('Clicked previous button');
}

// Submit Quiz
const submitQuiz = () => {
  questionsDiv.style.display = 'none';

  Score();

  submitBtn.innerHTML = 'Restart Quiz?';

  console.log('Quiz Submitted.')
}

// Restart Quiz
const restartQuiz = () => {
  resetQuestionState();

  if(questionIdx === totalQuestions - 1) {
    startQuiz();
  }

  scoreContainer.innerHTML = '';

  console.log('Quiz restarted.'); 
}

// Handle buttons
const handleBtnClick = () => {

  // Listen for button clicked
  prevBtn.onclick = () => prevQ();

  submitBtn.onclick = function(e)  {
    
    if(e.target.innerHTML === 'Start Quiz!') {
      startQuiz();
    } else if (e.target.innerHTML === 'Restart Quiz?') {
      console.log('Quiz Restarted!');
      restartQuiz();
    } else {
      submitQuiz();
    }
  };
  nextBtn.onclick = () => nextQ();

}


document.addEventListener('DOMContentLoaded', function () {
  // Load Quiz
  load();
  
  // Handle button click
  handleBtnClick();
});
