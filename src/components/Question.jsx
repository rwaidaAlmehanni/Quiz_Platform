import QuestionTimer from './QuestionTimer'
import Answers from './Answers'
import Questions from '../questions'

export default function Question(props) { 
  const { onTimeOut, currentActiveQuestionIndex }  = props
    return (
       <div id="question">
            <h2>{ Questions[currentActiveQuestionIndex].text }</h2>
            <Answers {...props} />
            <QuestionTimer timeOut={10000} onTimeOut={onTimeOut} />
        </div> 
    )
} 