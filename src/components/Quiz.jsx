import { useCallback, useState } from 'react'
import Questions from '../questions.js'
import Question from './Question.jsx'
import Summary from './Summary.jsx'
 
export default function Quiz() { 
    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([])
    const currentActiveQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1
    const isQuizCompleted = currentActiveQuestionIndex === Questions.length

    const handleSelectAnswer = useCallback((selectedAnswer) => { 
         setAnswerState('answered')
        setUserAnswers((prevAnswers) => ([...prevAnswers, selectedAnswer]))
        setTimeout(() => { 
            if (selectedAnswer === Questions[currentActiveQuestionIndex].answers[0]) {
                setAnswerState('correct')
            } else { 
              setAnswerState('wrong')  
            }
            setTimeout(() => { 
               setAnswerState('') 
            },2000)
        },1000)
    }, [currentActiveQuestionIndex])
    
    const onTimeOut = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])

    if (isQuizCompleted) { 
        return (<Summary userAnswers={ userAnswers} />)
    }


    const questionProps = {
        onTimeOut, 
        handleSelectAnswer, 
        answerState,
        userAnswers,
        currentActiveQuestionIndex,
    }

    return (
    <div id="quiz">
            <Question key={currentActiveQuestionIndex} {...questionProps} />
    </div>
    )
}