import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addQuiz } from "./quizSlice";
import { nanoid } from "nanoid";

const CreateQuiz = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('');
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
      imgUrl = "/static/template.jpg"
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
    
    const newQuiz = {
      id: nanoid(),
      title: title,
      author: author,
      desc: desc, 
      questions: [], 
      img: imgUrl,
      favorited: false
    }

    dispatch(addQuiz(newQuiz));
    navigate('/');
  };

  return (
    <div className="create-quiz-container">
      <h1>Create Quiz</h1>
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

export default CreateQuiz