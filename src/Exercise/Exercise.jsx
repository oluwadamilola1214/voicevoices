import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Exercise.css'

const questions = [
  { question: 'What is the IPA symbol for the sound in "see"?', options: ['A. /i:/', 'B. /e/', 'C. /a/', 'D. /ɔ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "cat"?', options: ['A. /u:/', 'B. /æ/', 'C. /ʊ/', 'D. /ɒ/'], correct: 'B' },
  { question: 'What is the IPA symbol for the sound in "goat"?', options: ['A. /ɪ/', 'B. /ʌ/', 'C. /oʊ/', 'D. /ɛ/'], correct: 'C' },
  { question: 'Which IPA symbol represents the sound in "boot"?', options: ['A. /u:/', 'B. /i:/', 'C. /ɑ:/', 'D. /ɔ:/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "thought"?', options: ['A. /ɒ/', 'B. /ɔ:/' , 'C. /ə/', 'D. /ʊ/'], correct: 'B' },
  { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. /e/', 'B. /ɜ:/' , 'C. /ʌ/', 'D. /æ/'], correct: 'C' },
  { question: 'What is the IPA symbol for the sound in "dress"?', options: ['A. /e/', 'B. /æ/' , 'C. /ʊ/', 'D. /i:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "trap"?', options: ['A. /æ/', 'B. /ɑ:/' , 'C. /ɛ/', 'D. /ɒ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. /ɜ:/', 'B. /u:/' , 'C. /ɔ:/' , 'D. /ə/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. /ʌ/', 'B. /ɒ/' , 'C. /ʊ/', 'D. /e/'], correct: 'C' },
  { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. /i:/', 'B. /ɪ/' , 'C. /ɛ/', 'D. /ɜ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "bath"?', options: ['A. /ɑ:/', 'B. /æ/' , 'C. /ɔ:/' , 'D. /ɒ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "happy"?', options: ['A. /i:/', 'B. /i/' , 'C. /ə/', 'D. /æ/'], correct: 'B' },
  { question: 'Which IPA symbol represents the sound in "lot"?', options: ['A. /ɒ/', 'B. /ɔ:/' , 'C. /ɜ:/', 'D. /ɛ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "goose"?', options: ['A. /u:/', 'B. /ʊ/' , 'C. /ɒ/', 'D. /ɜ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. /ɪ/', 'B. /i:/', 'C. /ɛ/', 'D. /e/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. /ɜ:/' , 'B. /æ/', 'C. /ʌ/', 'D. /ɑ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "strut"?', options: ['A. /ʌ/', 'B. /æ/' , 'C. /ɪ/', 'D. /i:/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "price"?', options: ['A. /aɪ/', 'B. /eɪ/', 'C. /ɔɪ/', 'D. /əʊ/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "mouth"?', options: ['A. /aʊ/', 'B. /aɪ/', 'C. /eɪ/', 'D. /ɔɪ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "choice"?', options: ['A. /eɪ/', 'B. /ɔɪ/', 'C. /aɪ/', 'D. /aʊ/'], correct: 'B' },
  { question: 'Which IPA symbol represents the sound in "near"?', options: ['A. /ɪə/', 'B. /eə/', 'C. /ʊə/', 'D. /aɪ/'], correct: 'A' },
  { question: 'What is the IPA symbol for the sound in "square"?', options: ['A. /ʊə/', 'B. /ɪə/', 'C. /eə/', 'D. /aɪ/'], correct: 'C' },
  { question: 'Which IPA symbol represents the sound in "cure"?', options: ['A. /ɪə/', 'B. /ʊə/', 'C. /eə/', 'D. /ɔɪ/'], correct: 'B' },
  { question: 'What is the IPA symbol for the sound in "face"?', options: ['A. /eɪ/', 'B. /ɔɪ/', 'C. /aɪ/', 'D. /aʊ/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "goat"?', options: ['A. /eɪ/', 'B. /əʊ/', 'C. /aɪ/', 'D. /aʊ/'], correct: 'B' },
  { question: 'What is the IPA symbol for the sound in "nurse"?', options: ['A. /ɜ:/' , 'B. /æ/', 'C. /ʌ/', 'D. /ɑ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "foot"?', options: ['A. /ʌ/', 'B. /ɒ/' , 'C. /ʊ/', 'D. /e/'], correct: 'C' },
  { question: 'What is the IPA symbol for the sound in "fleece"?', options: ['A. /i:/', 'B. /ɪ/' , 'C. /ɛ/', 'D. /ɜ:/'], correct: 'A' },
  { question: 'Which IPA symbol represents the sound in "kit"?', options: ['A. /ɪ/', 'B. /i:/', 'C. /ɛ/', 'D. /e/'], correct: 'A' },
];

const Exercise = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(''));
    setShowResults(false);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="exercise-page">
      <h1>IPA Exercise</h1>
      {questions.map((q, index) => (
        <div key={index} className="question-block">
          <p>{q.question}</p>
          {q.options.map((option, optIndex) => (
            <label key={optIndex}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option[0]}
                checked={answers[index] === option[0]}
                onChange={() => handleAnswerChange(index, option[0])}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {showResults && (
        <div className="results">
          <h2>Results</h2>
          {questions.map((q, index) => (
            <div key={index} className="result-block">
              <p>{q.question}</p>
              <p>
                Your answer: {answers[index]}{' '}
                {answers[index] === q.correct ? '✔️' : '❌'}
              </p>
              {answers[index] !== q.correct && (
                <p>Correct answer: {q.correct}</p>
              )}
            </div>
          ))}
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
      <button style={{margin:'50px'}} onClick={handleBackToHome}>Back to Homepage</button>
    </div>
  );
};

export default Exercise;
