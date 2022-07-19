import { useState, useEffect } from "react"
import { BsCheckCircleFill } from "react-icons/bs"

const EditQuestion = ({ questionObj, deleteQuestion, updateQuestion }) => {
    const [question, setQuestion] = useState(questionObj.question);
    const [firstAnswer, setFirstAnswer] = useState(questionObj.answers[0].answer);
    const [firstCorrect, setFirstCorrect] = useState(questionObj.answers[0].correct);
    const [secondAnswer, setSecondAnswer] = useState(questionObj.answers[1].answer);
    const [secondCorrect, setSecondCorrect] = useState(questionObj.answers[1].correct);
    const [thirdAnswer, setThirdAnswer] = useState(questionObj.answers[2].answer);
    const [thirdCorrect, setThirdCorrect] = useState(questionObj.answers[2].correct);
    const [fourthAnswer, setFourthAnswer] = useState(questionObj.answers[3].answer);
    const [fourthCorrect, setFourthCorrect] = useState(questionObj.answers[3].correct);


    const saveQuestionClicked = () => {
        const newQuestionObj = {
            id: questionObj.id,
            question: question,
            answers: [
                {
                    id: questionObj.answers[0].id,
                    answer: firstAnswer,
                    correct: firstCorrect
                },
                {
                    id: questionObj.answers[1].id,
                    answer: secondAnswer,
                    correct: secondCorrect
                },
                {
                    id: questionObj.answers[2].id,
                    answer: thirdAnswer,
                    correct: thirdCorrect
                },
                {
                    id: questionObj.answers[3].id,
                    answer: fourthAnswer,
                    correct: fourthCorrect
                },
            ]
        }

        updateQuestion(newQuestionObj);
        
    }

    const deleteButtonClicked = () => {
        deleteQuestion(questionObj.id);
    }

    return (
        <div className="edit-question-node">
            <div className='edit-question-header'>
                <div>
                    <label htmlFor="question">Question</label><br />
                    <input type="text" name="question" value={question} onChange={(e) => setQuestion(e.target.value)} />
                </div>
                <button onClick={deleteButtonClicked}>Delete Question</button>
            </div>
            <br />
            <div className="answer-grid">
                <div className="grid-answer">
                    <label htmlFor="firstAnswer">First Answer</label><br />
                    <input type="text" name="firstAnswer" value={firstAnswer} onChange={(e) => setFirstAnswer(e.target.value)} />
                    <br />
                    <label htmlFor="firstCorrect">Correct</label>
                    <input type="checkbox" name="firstCorrect" checked={firstCorrect} onChange={e => setFirstCorrect(!firstCorrect)} />
                </div>
                <div className="grid-answer">
                    <label htmlFor="secondAnswer">Second Answer</label><br />
                    <input type="text" name="secondAnswer" value={secondAnswer} onChange={(e) => setSecondAnswer(e.target.value)} />
                    <br />
                    <label htmlFor="secondCorrect">Correct</label>
                    <input type="checkbox" name="secondCorrect" checked={secondCorrect} onChange={e => setSecondCorrect(!secondCorrect)}/>
                </div>
                <div className="grid-answer">
                    <label htmlFor="thirdAnswer">Third Answer</label><br />
                    <input type="text" name="thirdAnswer" value={thirdAnswer} onChange={(e) => setThirdAnswer(e.target.value)} />
                    <br />
                    <label htmlFor="thirdCorrect">Correct</label>
                    <input type="checkbox" name="thirdCorrect" checked={thirdCorrect} onChange={e => setThirdCorrect(!thirdCorrect)}/>
                </div>
                <div className="grid-answer">
                    <label htmlFor="fourthAnswer">Fourth Answer</label><br />
                    <input type="text" name="fourthAnswer" value={fourthAnswer} onChange={(e) => setFourthAnswer(e.target.value)} />
                    <br />
                    <label htmlFor="fourthCorrect">Correct</label>
                    <input type="checkbox" name="fourthCorrect" checked={fourthCorrect} onChange={e => setFourthCorrect(!fourthCorrect)}/>
                </div>
            </div>
            <div className="edit-question-footer">
                <button onClick={saveQuestionClicked}>Save Question</button>
                {/* <div className="checkmark">
                    <BsCheckCircleFill size={24} style={{color: "#4CAF50"}}/>
                </div> */}
            </div>
        </div>
    )
}

export default EditQuestion