import { useState } from "react";
import { useSelector } from "react-redux";
import { selectQuizById } from "./quizSlice"
import { useParams, useNavigate } from "react-router-dom"
import { ImArrowLeft, ImArrowRight } from "react-icons/im"
import Answer from "./Answer";

const QuizQuestions = () => {
  const { quizId } = useParams();
  const quiz = useSelector((state) => selectQuizById(state, quizId));
  const quizQuestions = quiz.questions;
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  let currQuestion = "";
  let currAnswers = [];
  if (quizQuestions.length > 0) {
    currQuestion = quizQuestions[questionIndex].question;
    currAnswers = quizQuestions[questionIndex].answers;
  }

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  }
  
  const prevQuestion = () => {
    setQuestionIndex(questionIndex - 1);
  }

  const editQuestions = () => {
    navigate(`/quiz/questions/edit/${quizId}`);
  }

  const arrowStyle = { color: "white" }
  const editButton = <div className="edit-question-button">
                      <button onClick={editQuestions}>Edit Questions</button>
                    </div>;
  const noQuestions = <div>
                        <div className="favorites-info">
                          This quiz has no questions. Add questions using the button below.
                        </div>
                        {editButton}
                      </div>;

  return (
    quizQuestions <= 0 ? noQuestions : 
      <div className="question-container">
        {editButton}
        <div className="question-node">
          <div className="question-current">
            {currQuestion}
          </div>
          <div className="question-answers">
            {currAnswers.map((answer) => <Answer key={answer.id} answer={answer} />)}
          </div>
        </div>
        <div className="arrows">
          <div className="left-arrow">
            {questionIndex > 0 ? <ImArrowLeft style={arrowStyle} size={42} onClick={prevQuestion} /> : ''}
          </div>
          <div className="question-number">
            {`${questionIndex + 1}/${quizQuestions.length}`}
          </div>
          <div className="right-arrow">
            {questionIndex < (quizQuestions.length - 1) ? <ImArrowRight style={arrowStyle} size={42} onClick={nextQuestion} /> : ''}
          </div>
        </div>
      </div>
  )
}

export default QuizQuestions