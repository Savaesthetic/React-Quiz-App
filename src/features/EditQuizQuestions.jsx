import { useSelector } from "react-redux";
import { selectQuizById } from "./quizSlice"
import { useParams } from "react-router-dom"
import EditQuestion from "./EditQuestion";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { updateQuizQuestions } from "./quizSlice";
import { useNavigate } from "react-router-dom";

const EditQuizQuestions = () => {
  const { quizId } = useParams();
  const quiz = useSelector((state) => selectQuizById(state, quizId));
  const quizQuestions = quiz.questions;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addQuestion = () => {
    const newQuestion = {
      id: nanoid(),
      question: 'Question',
      answers: [
        {
          id: nanoid(),
          answer: 'First Answer',
          correct: true
        },
        {
          id: nanoid(),
          answer: 'Second Answer',
          correct: true
        },
        {
          id: nanoid(),
          answer: 'Third Answer',
          correct: true
        },
        {
          id: nanoid(),
          answer: 'Fourth Answer',
          correct: true
        },
      ]
    }

    const newQuestionArray = [...quizQuestions, newQuestion];
    dispatch(updateQuizQuestions({id: quizId, changes: {questions: newQuestionArray}}));
  }

  const deleteQuestion = (questionId) => {
    const newQuestionArray = quizQuestions.filter(question => question.id !== questionId);
    dispatch(updateQuizQuestions({id: quizId, changes: {questions: newQuestionArray}}));
  }

  const updateQuestion = (questionObj) => {
    const index = quizQuestions.findIndex(question => question.id === questionObj.id);
    let newQuestionArray = [...quizQuestions];
    newQuestionArray[index] = questionObj;
    dispatch(updateQuizQuestions({id: quizId, changes: {questions: newQuestionArray}}));
  }
  
  const returnToQuiz = () => {
    navigate(-1);
  }

  return (
    <div className="edit-question-container">
      <div className="edit-question-buttons">
          <button onClick={addQuestion}>Add Question</button>
          <button onClick={returnToQuiz}>Return To Quiz</button>
      </div>
      {quizQuestions.map(question => <EditQuestion key={question.id} questionObj={question} deleteQuestion={deleteQuestion} updateQuestion={updateQuestion} />)}
    </div>
  )
}

export default EditQuizQuestions