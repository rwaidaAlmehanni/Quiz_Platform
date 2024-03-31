import quizCompletedImage from '../assets/quiz-complete.png'
import Questions from '../questions'

export default function Summary({ userAnswers }) { 
    const skippedAnswers = userAnswers.filter(answer => answer === null)
    const correctAnswers = userAnswers.filter((answer, idx) => answer === Questions[idx].answers[0])
    const skippedAnswersShar = Math.round((skippedAnswers.length / userAnswers.length) * 100)
    const correctAnswersShar = Math.round((correctAnswers.length / userAnswers.length) * 100)
    const wrongAnswersShar = 100 - (skippedAnswersShar + correctAnswersShar)
    
    return (
         <div id="summary">
                <img src={quizCompletedImage} alt={ 'Troffy image '} />
            <h2>Quiz is completed</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{ skippedAnswersShar }%</span>
                    <span className="text">skipped</span>
                </p>
                 <p>
                    <span className="number">{ correctAnswersShar }%</span>
                    <span className="text">answered correctly</span>
                </p>
                 <p>
                    <span className="number">{ wrongAnswersShar }%</span>
                    <span className="text">answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => { 
                    let cssClass = 'user-answer'
                    if (answer === null) {
                        cssClass += ' skipped'
                    } else if (answer === Questions[index].answers[0]) {
                        cssClass += ' correct'
                    } else { 
                       cssClass += ' wrong' 
                    }
                    return (
                        <li key={ `${answer}_${index}`}>
                            <h3>{ index + 1 }</h3>
                            <p className="question">{ Questions[index].text}</p>
                            <p className={ cssClass }> { answer ?? 'Skipped'}</p>
                </li> 
                    )
                })}
                
            </ol>
        </div>
    )
}