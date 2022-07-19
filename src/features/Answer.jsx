const Answer = ({ answer }) => {
    const toggleClass = (e) => {
        const divClass = answer.correct ? "answer-correct" : "answer-incorrect";
        e.target.className = divClass;
    }

    return (
        <div className="answer" onClick={toggleClass}>{answer.answer}</div>
    )
}

export default Answer