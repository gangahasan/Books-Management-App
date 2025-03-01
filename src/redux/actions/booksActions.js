
import axios from "axios";
export const FETCH_BOOKS = "FETCH_BOOKS";
export const UPADTE_BOOK_STATE = "UPADTE_BOOK_STATE";

export const fetchBooks=()=>async(dispatch)=>{
    try {
        const response= await axios.get('https://module4-main-evaluation-default-rtdb.firebaseio.com/books.json');

        console.log(response.data,"response");
        dispatch({type: FETCH_BOOKS, payload: response.data});
    } catch (error) {
        console.error(error);
    }
}