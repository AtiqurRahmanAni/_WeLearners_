import React, { useState } from 'react'

function TestPage() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const {questions} = quizData
  const {question , choices, correctAnswer} = questions[activeQuestion]
  return (
    <div>
     <div>
      <span>
        <span>

        </span>
      </span>
     </div>
      <h2>{question}</h2>
     <ul>
      {choices.map((answer, index)=>{
           <li key ={answer}>{answer}</li>
      })}
     </ul>
    </div>
  )
}

export default TestPage