import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { selectQuizById, updateQuiz } from "./quizSlice"
import { useParams, useNavigate } from "react-router-dom"

const EditQuiz = () => {
  const { quizId } = useParams();
  const quiz = useSelector((state) => selectQuizById(state, quizId));

  const [title, setTitle] = useState(quiz.title);
  const [desc, setDesc] = useState(quiz.desc);
  const [author, setAuthor] = useState(quiz.author);
  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const canSave = [title, desc, author].every(Boolean);

  const inputError = <div className="form-error">Title, Description, and Author Required</div>;

  const handleSubmit = (e) => {
    e.preventDefault();

    let imgUrl;
    if (img == null) {
      imgUrl = quiz.img
    } else {
      if (window.hasOwnProperty('URL')) {
        imgUrl = window.URL.createObjectURL(img);
      } else {
        imgUrl = window.webkitURL.createObjectURL(img);
      }
    }

    if (!canSave) {
      setError(true);
      return;
    }
    
    const updatedQuiz = {
      title: title,
      author: author,
      desc: desc, 
      questions: quiz.questions, 
      img: imgUrl,
      favorited: quiz.favorited
    }

    dispatch(updateQuiz({id: quizId, changes: updatedQuiz}));
    navigate('/');
  };

  return (
    <div className="create-quiz-container">
      <h1>Edit Quiz</h1>
      <hr />

      {error ? inputError : <br />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label><br />
        <input type="text" placeholder="Title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br /><br />
        <label htmlFor="desc">Description</label><br />
        <input type="text" placeholder="Description" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
        <br /><br />
        <label htmlFor="author">Author</label><br />
        <input type="text" placeholder="Author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <br /><br />
        <label htmlFor="img">Thumbnail<span>*</span></label>
        <br /><br />
        <input type="file" name="img" accept="image/*" onChange={(e) =>setImg(e.target.files[0])} />
        <br /><br />
        <button>Add Quiz</button>
      </form>
    </div>
  )
}

export default EditQuiz