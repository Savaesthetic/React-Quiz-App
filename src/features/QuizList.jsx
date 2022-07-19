import Quiz from "./Quiz"
import { useSelector } from "react-redux"
import { selectAllQuizzes } from "./quizSlice"

const QuizList = () => {
  const quizzes = useSelector(selectAllQuizzes);

  return (
    <section className="quiz-list">
      {quizzes.map(quiz => <Quiz key={quiz.id} data={quiz} />)}
    </section>
  )
}

export default QuizList