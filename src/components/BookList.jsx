
import React,{useState,useEffect} from 'react'

const BookList = () => {

 const[books,setBooks]=useState([])
 
 console.log(books)
 
 useEffect(() => {
   getbooks();
 }, [])



     const getbooks=()=>{
     fetch("https://www.googleapis.com/books/v1/volumes?q=robbinsharma&lang=en&key=AIzaSyAPDZC5P_B99sxHCgGvymzBDa5QhwoL0Uw")
     .then((d)=>d.json())
     .then((res)=>setBooks([...res.items]))
     .catch((err)=>console.log(err))

     }





  return (
       <div>
       
       {books.map((book)=>{
        
        return(
            <div>
            <h1>{book.volumeInfo.title}</h1>
             <img src={book.volumeInfo.imageLinks.thumbnail}/>
             {/* <p>{book.volumeInfo.description}</p> */}
              <p>{book.volumeInfo.authors[0]}</p>
    
            </div>
        )

       })}
       
       </div>
  )
}

export default BookList;