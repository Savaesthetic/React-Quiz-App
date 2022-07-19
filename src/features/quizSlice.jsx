import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: nanoid(),
        title: 'Addition',
        author: 'RandomUser123',
        desc: 'Quiz on addition',
        questions: [
            {
                id: nanoid(),
                question: 'What is 1 + 1?',
                answers: [
                    {
                        id: nanoid(),
                        answer: '1',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '2',
                        correct: true
                    },
                    {
                        id: nanoid(),
                        answer: '3',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '4',
                        correct: false
                    }
                ]
            }, 
            {
                id: nanoid(),
                question: 'What is 123 + 321?',
                answers: [
                    {
                        id: nanoid(),
                        answer: '111',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '222',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '333',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '444',
                        correct: true
                    }
                ]
            }
        ],
        img: "/static/template.jpg",
        favorited: true
    },
    {
        id: nanoid(),
        title: 'Subtraction',
        author: 'RandomUser0',
        desc: 'Quiz on subtraction',
        questions: [
            {
                id: nanoid(),
                question: 'What is 1 - 1?',
                answers: [
                    {
                        id: nanoid(),
                        answer: '0',
                        correct: true
                    },
                    {
                        id: nanoid(),
                        answer: '1',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '2',
                        correct: false
                    },
                    {
                        id: nanoid(),
                        answer: '3',
                        correct: false
                    }
                ]
            }
        ],
        img: "/static/template.jpg",
        favorited: false
    }
]

const quizAdapter = createEntityAdapter({});
const emptyInitialState = quizAdapter.getInitialState();
const filledState = quizAdapter.upsertMany(emptyInitialState, initialState);

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: filledState,
    reducers: {
        addQuiz: quizAdapter.addOne,
        deleteQuiz: quizAdapter.removeOne,
        toggleFavorite: quizAdapter.updateOne,
        updateQuiz: quizAdapter.updateOne,
        updateQuizQuestions: quizAdapter.updateOne
    }
})

export const {
    selectAll: selectAllQuizzes,
    selectById: selectQuizById,
} = quizAdapter.getSelectors(state => state.quiz);

export const selectFavoritedQuizzes = createSelector(
    [selectAllQuizzes],
    (quizzes) => quizzes.filter(quiz => quiz.favorited)
)

export const { addQuiz, deleteQuiz, toggleFavorite, updateQuiz, updateQuizQuestions } = quizSlice.actions;
export default quizSlice.reducer;