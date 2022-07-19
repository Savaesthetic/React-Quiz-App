import { useState } from "react"
import { Link } from "react-router-dom";
import { MdOutlineModeEditOutline } from "react-icons/md"
import { RiDeleteBin2Line } from "react-icons/ri"
import { useDispatch } from "react-redux";
import { deleteQuiz, toggleFavorite } from "./quizSlice";

const Quiz = ({ data }) => {
    const [favorited, setFavorited] = useState(data.favorited);
    const dispatch = useDispatch();

    const toggleFavoriteButton = () => {
        const newFavoriteState = !favorited;
        setFavorited(newFavoriteState)
        dispatch(toggleFavorite({id: data.id, changes: {favorited: newFavoriteState}}))
    }

    const star = {
        filled: <img src="/static/star-filled.svg" alt="Outline of star" onClick={toggleFavoriteButton} className="fav" />,
        outline: <img src="/static/star-outline.svg" alt="Filled star" onClick={toggleFavoriteButton} className="fav" />
    }

    const deleteButtonClicked = () => {
        dispatch(deleteQuiz(data.id));
    }

    return (
        <div className="quiz-node">
            <div className="quiz-header">
                <div className="quiz-title">
                    {data.title}
                </div>
                <div className="quiz-author">
                    {data.author}
                </div>
            </div>
            <Link to={`quiz/questions/${data.id}`}>
                <div className="quiz-img-container">
                    <img src={data.img} alt="Quiz Image" className="quiz-img" />
                </div>
            </Link>
            <div className="quiz-footer">
                <div className="quiz-footer-desc">
                    {favorited ? star.filled : star.outline}
                    <p className="quiz-desc">{data.desc}</p>
                </div>
                <div className="quiz-footer-icons">
                    <Link to={`quiz/edit/${data.id}`} className='edit'><MdOutlineModeEditOutline size={24}/></Link>
                    <RiDeleteBin2Line size={24} className='delete' onClick={deleteButtonClicked} />
                </div>
            </div>
        </div>
    )
}

export default Quiz