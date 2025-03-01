import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchBooks } from '../redux/actions/booksActions';

const Home = () => {
    const books = useSelector((state)=>state.books.books);
    console.log(books.length);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchBooks)
    },[dispatch])

  return (
    <div>
        Total Books
        {books.length >0 &&
            books.map(book => (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Home