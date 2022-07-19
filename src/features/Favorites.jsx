import Quiz from "./Quiz"
import { useSelector } from "react-redux"
import { selectFavoritedQuizzes } from "./quizSlice"
import { Link } from "react-router-dom"

const Favorites = () => {
  const quizzes = useSelector(selectFavoritedQuizzes);

  const noFavorites = <div className="favorites-info">
    You have no favorites. Add more on the main <Link to="/">Quizzes</Link> page to see them here.
    </div>;

  return (
    <section className="quiz-list">
      {quizzes.length == 0 ? noFavorites : 
      quizzes.map(quiz => <Quiz key={quiz.id} data={quiz} />)}
    </section>
  )
}

export default Favorites