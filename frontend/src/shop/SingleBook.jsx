
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function SingleBook() {
  const { imageURL, bookTitle, bookDescription, bookPDFURL } = useLoaderData();

  return (
    <div>
      <div className="card mx-auto my-28" style={{ width: '20rem' }}>
        <img  src={imageURL} className="card-img-top max-h-56" alt="Book Cover" />
        <div className="card-body">
          <h2 className="card-title font-extrabold">{bookTitle}</h2>
          <p className="card-text  max-h-36 overflow-auto">{bookDescription}</p>
          <a href={bookPDFURL} className="btn btn-primary my-3">
            BOOK PDF
          </a>
        </div>
      </div>
    </div>
  );
}


export default SingleBook
