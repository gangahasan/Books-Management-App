import { FETCH_BOOKS } from "../actions/booksActions"

const initState = {books:[]}
export const booksReducer=(state=initState,action)=>{
    switch(action.type){
        case FETCH_BOOKS:
            return {...state, books: [...state.books,action.payload]}
            
        
        case 'ADD_MYBOOK':
            return {...state, books: [...state.books, action.payload]}
        
        default:
            return state
    }
}