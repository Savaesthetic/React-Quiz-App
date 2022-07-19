import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <h1>Quiz App</h1>
        <nav>
            <ul>
                <li><Link to="/">Quizzes</Link></li>
                <li><Link to="/quiz/create">Create Quiz</Link></li>
                <li><Link to="/quiz/favorites">Favorites</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header