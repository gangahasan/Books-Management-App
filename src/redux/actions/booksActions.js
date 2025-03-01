
import axios from "axios";
export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";

export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const UPADTE_BOOK_STATUS = "UPADTE_BOOK_STARUS";

export const fetchBooks=()=> async(dispatch)=> {
    try {
        dispatch({ type: FETCH_BOOKS_REQUEST });
            const response = await axios.get("https://module4-main-evaluation-default-rtdb.firebaseio.com/books.json");
        console.log(response,"response");
        const books = Object.entries(response.data).map(([id,bookdata])=>({id: bookdata}))
        dispatch({ type: FETCH_BOOKS_REQUEST, payload: books });
    } catch (error) {
        dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
    }
}