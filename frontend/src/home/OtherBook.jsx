import React from 'react'
import { useState ,useEffect } from 'react';
import BookCards from '../components/BookCards';

export default function OtherBook() {
    const [Books, setBooks] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/all-books").then((res)=>{
            return res.json();
        })
        .then(data=>{setBooks(data)})
    },[])
  return (
    <div>
      <BookCards books={Books} headLine="Other Books"/>
    </div>
  )
}
