import { useRef } from 'react'
import Questions from '../questions'

export default function Answers({  currentActiveQuestionIndex, userAnswers, handleSelectAnswer, answerState }) { 
      const shuffeldAnswers = useRef()
   
    if (!shuffeldAnswers.current) { 
        shuffeldAnswers.current = [...Questions[currentActiveQuestionIndex].answers]
        shuffeldAnswers.current.sort(() => Math.random() - 0.5)    
    }
    return (
     <ul id="answers">
            {shuffeldAnswers.current.map(answer => { 
            const isSelected = userAnswers[userAnswers.length - 1] === answer
            let answerClass = ''
                if (answerState === 'answered' && isSelected) {
                    answerClass = 'selected'
                } else if ((answerState === 'correct' || answerState === 'wrong') && isSelected) { 
                    answerClass = answerState 
                }
                console.log(answerState, answerClass, 'xxx')
            return (
                <li key={answer} className='answer'>
                    <button className={answerClass} onClick={() => handleSelectAnswer(answer)} disabled={ answerState !== ''}>{answer}</button>
                </li>
            )
        })}
    </ul>
)
}