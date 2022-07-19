import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import QuizList from "./features/QuizList";
import CreateQuiz from "./features/CreateQuiz";
import Favorites from "./features/Favorites";
import EditQuiz from "./features/EditQuiz";
import QuizQuestions from "./features/QuizQuestions";
import EditQuizQuestions from "./features/EditQuizQuestions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<QuizList />} />
        <Route path="quiz">
          <Route path="create" element={<CreateQuiz />} />
          <Route path="edit/:quizId" element={<EditQuiz />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="questions">
            <Route path=":quizId" element={<QuizQuestions />} />
            <Route path="edit/:quizId" element={<EditQuizQuestions />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
